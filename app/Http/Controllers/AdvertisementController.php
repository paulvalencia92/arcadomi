<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Http\Requests\AdvertisementRequest;
use App\Models\Advertisement;
use App\Models\Comment;
use Illuminate\Http\Request;

class AdvertisementController extends Controller
{


    public function index()
    {
        $advertisements = Advertisement::with([
            'user',
            'advertisement_category',
            'comments' => function ($query) {
                $query->orderBy('created_at', 'desc')->with('user');
            }
        ])->get();
        return response()->json($advertisements, 200);
    }

    public function getPublished()
    {
        $advertisements = Advertisement::with([
            'user',
            'advertisement_category',
            'comments' => function ($query) {
                $query->orderBy('created_at', 'desc')->with('user');
            }
        ])->whereIsPublished(true)
            ->withCount('comments')
            ->get();

        return response()->json($advertisements, 200);
    }


    public function store(AdvertisementRequest $request)
    {

        $image = null;
        if ($request->hasFile("file")) {
            $image = Uploader::uploadFile("file", "advertisements");
        }

        $advertisement = Advertisement::create($this->advertisementInput($image));

        return response()->json($advertisement, 201);
    }


    public function update(AdvertisementRequest $request, Advertisement $advertisement)
    {

        $image = $advertisement->image;
        if ($request->hasFile("file")) {
            if ($advertisement->image) {
                Uploader::removeFile('advertisements', $advertisement->image);
            }
            $image = Uploader::uploadFile('file', 'advertisements');
        }

        $advertisement->fill($this->advertisementInput($image))->save();
        return response()->json($advertisement->load('user', 'advertisement_category'), 201);
    }

    public function destroy(Advertisement $advertisement)
    {
        if ($advertisement->image) {
            Uploader::removeFile('advertisements', $advertisement->image);
        }
        $advertisement->delete();
        return response()->json('Success deleted', 200);
    }

    public function toggleStatus(Advertisement $advertisement)
    {
        $advertisement->is_published = !$advertisement->is_published;
        $advertisement->save();
        return response()->json($advertisement->load('user', 'advertisement_category'), 201);
    }

    public function addComment(Request $request, Advertisement $advertisement)
    {
        $advertisement->comments()->create(['body' => $request->message]);
        return response()->json($advertisement->load([
            'user',
            'advertisement_category',
            'comments' => function ($query) {
                $query->orderBy('created_at', 'desc')->with('user');
            }
        ]), 201);
    }


    public function deleteComment(Comment $comment)
    {
        $comment->delete();
        return response()->json('Success deleted', 200);
    }


    protected function advertisementInput(string $file = null): array
    {
        return [
            'title' => request('title'),
            'publication_date' => request('publication_date'),
            'is_published' => request('is_published') == "true",
            'is_featured' => request('is_featured') == "true",
            'block_comments' => request('block_comments') == "true",
            'massive_mail' => request('massive_mail') == "true",
            'description' => request('description'),
            'image' => $file,
            'blocks_id' => request('blocks_id'),
            'advertisement_category_id' => request('advertisement_category_id'),
        ];
    }

}
