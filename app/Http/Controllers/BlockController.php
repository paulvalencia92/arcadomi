<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlockRequest;
use App\Models\Block;

class BlockController extends Controller
{

    public function index()
    {
        $blocks = Block::withCount('units')->get();
        return response()->json($blocks, 200);
    }


    public function store(BlockRequest $request)
    {
        $block = Block::create([
            'name' => request('name')
        ]);

        return response()->json($block, 201);
    }


    public function show($id)
    {
        //
    }


    public function update(BlockRequest $request, Block $block)
    {
        $block->name = request('name');
        $block->update();
        return response()->json($block, 201);
    }


    public function destroy(Block $block)
    {
        $block->delete();
        return response()->json('block deleted success', 200);
    }
}
