<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Http\Requests\AdvertisementCategoryRequest;
use App\Models\AdvertisementCategory;

class AdvertisementCategoryController extends Controller
{

    public function index()
    {
        $advertisementCategories = AdvertisementCategory::all();
        return response()->json($advertisementCategories, 200);
    }


    public function store(AdvertisementCategoryRequest $request)
    {
        $image = null;
        if ($request->hasFile("file")) {
            $image = Uploader::uploadFile("file", "advertisement_categories");
        }

        $advertisementCategory = AdvertisementCategory::create([
            'name' => $request->name,
            'permission' => $request->permission,
            'description' => $request->description,
            'image' => $image,
        ]);

        return response()->json($advertisementCategory, 201);
    }


    public function show(AdvertisementCategory $advertisementCategory)
    {
        //
    }


    public function update(AdvertisementCategoryRequest $request, AdvertisementCategory $advertisementCategory)
    {
        $image = $advertisementCategory->image;
        if ($request->hasFile("file")) {
            if ($advertisementCategory->image) {
                Uploader::removeFile('advertisement_categories', $advertisementCategory->image);
            }
            $image = Uploader::uploadFile('file', 'advertisement_categories');
        }


        $advertisementCategory->fill([
            'name' => $request->name,
            'permission' => $request->permission,
            'description' => $request->description,
            'image' => $image,
        ])->save();

        return response()->json($advertisementCategory, 201);
    }


    public function destroy(AdvertisementCategory $advertisementCategory)
    {
        if ($advertisementCategory->image) {
            Uploader::removeFile('advertisement_categories', $advertisementCategory->image);
        }
        $advertisementCategory->delete();
        return response()->json('Success deleted', 200);
    }
}
