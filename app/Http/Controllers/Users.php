<?php

namespace App\Http\Controllers;

use App\User;
use App\Address;
use App\Company;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class Users extends Controller
{
	private $users_data_url = "http://jsonplaceholder.typicode.com/users";
	
	public function destroy(Request $request, $id) {
		$user = User::find($id);
		if($user->delete()) { 
			return "Usuário apagado com sucesso";
		} else {
			return false;
		}
	}
	
	public function update(Request $request, $id) {
		if(!$request->input("name") || !$request->input("username") || !$request->input("email")) return false;
		
		$user = User::find($id);
		$user->name = $request->input("name");
		$user->username = $request->input("username");
		$user->email = $request->input("email");
		$user->phone = $request->input("phone");
		$user->website = $request->input("website");
		if($user->save()) { 
			return "Usuário editado com sucesso";
		} else {
			return false;
		}	
				
	}
	
	public function store(Request $request) {
		if(!$request->input("name") || !$request->input("username") || !$request->input("email")) return false;
		
		$user = new User;
		$user->name = $request->input("name");
		$uses->username = $request->input("username");
		$user->email = $request->input("email");
		$user->phone = $request->input("phone");
		$user->website = $request->input("website");
		if($user->save()) { 
			return "Usuário inserido com sucesso";
		} else {
			return false;
		}
		
	}
	
	public function all() {
		$db = 	DB::table('users')->
					leftJoin('companies', 'users.company_id', '=', 'companies.id')->
					leftJoin('addresses', 'users.address_id', '=', 'addresses.id')->
					select('companies.name AS company_name', 'addresses.*', 'users.*')->
					get();
		
		return $db;
	}
	
	public function search($id) {
		$db = 	DB::table('users')->
					leftJoin('companies', 'users.company_id', '=', 'companies.id')->
					leftJoin('addresses', 'users.address_id', '=', 'addresses.id')->
					select('companies.name AS company_name', 'addresses.*', 'users.*')->
					where('users.id', $id)->
					get();
		
		return $db;
	}
	
    public function import() {
		$i = 0;
		
		$users = json_decode(file_get_contents($this->users_data_url), true);
		
		foreach($users as $user) {
			
			if(isset(User::where('email', $user['email'])->first()->id)) continue;
			
			if(isset($user['name']) && isset($user['username']) && isset($user['email'])) {
				
				if(isset($user['company']['name'])) {
					$company = new Company;
					$company->id = @Company::where('name', $user['company']['name'])->first()->id;
					if(!$company->id){
						$company->name = $user['company']['name'];
						$company->catchPhrase = $user['company']['catchPhrase'];
						$company->bs = $user['company']['bs'];
						$company->save();
					}
				}
				
				if(isset($user['address']['street'])) {
					$address = new Address;
					$address->street = $user['address']['street'];
					$address->suite = $user['address']['suite'];
					$address->city = $user['address']['city'];
					$address->zipcode = $user['address']['zipcode'];
					$address->lat = $user['address']['geo']['lat'];
					$address->lng = $user['address']['geo']['lng'];
					$address->save();
				}
				
				$user_insert = new User;
				$user_insert->name = $user['name'];
				$user_insert->username = $user['username'];
				$user_insert->email = $user['email'];
				$user_insert->address_id = $address->id;
				$user_insert->phone = $user['phone'];
				$user_insert->website = $user['website'];
				$user_insert->company_id = $company->id;
				if($user_insert->save()) $i++;
				
			}
			
		}
		return $i;
	}
}
