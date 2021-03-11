<?php

namespace App\Http\Controllers;

use App\Http\Requests\VideConferenceRequest;
use App\Models\VideoConference;
use Illuminate\Http\Request;

class VideoConferenceController extends Controller
{

    public function index()
    {
        $videoConferences = VideoConference::all();
        return response()->json($videoConferences, 200);
    }


    public function store(VideConferenceRequest $request)
    {
        $videoConference = VideoConference::create([
            'title' => $request->title,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'description' => $request->description,
            'url' => 'url-password',
            'password' => $request->password,
        ]);
        return response()->json($videoConference, 201);
    }


    public function show(VideoConference $videoConference)
    {
        //
    }


    public function update(Request $request, VideoConference $videoConference)
    {
        //
    }


    public function destroy(VideoConference $videoConference)
    {
        //
    }
}
