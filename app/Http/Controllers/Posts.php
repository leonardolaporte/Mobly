<?php

namespace App\Http\Controllers;

use App\User;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class Posts extends Controller
{
    private $posts_data_url = "http://jsonplaceholder.typicode.com/posts";
	
	public function search($user_id) {
		return Post::where('user_id', $user_id)->get();
	}
	
	public function import() {
		$i = 0;
		
		$posts = json_decode(file_get_contents($this->posts_data_url), true);
		foreach($posts as $post) {
			$user_id = User::find($post['userId'])->id;
			if(isset($user_id)) {
				$post_insert = new Post;
				$post_insert->user_id = $user_id;
				$post_insert->title = $post['title'];
				$post_insert->body = $post['body'];
				if($post_insert->save()) $i++;
			}
		}
		return $i;
	}
}
