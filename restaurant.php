<?php
header("Content-type: application/json");

require 'data.php';


$req=$_GET['req'] ?? null;

if($req)
{
	$jsonData=file_get_contents("restaurant.json");
	$dataList=json_decode($jsonData,true)['menu_items'];

	try {
		$restaurantData=new RestaurantData($dataList);

	} catch (Exception $th) {
		echo json_encode([$th->getMessage()]);
		return;
	}

}
switch ($req) {
	case 'item_name':
		echo $restaurantData->get_items();
		break;
	case 'menu_item':
		$menu=$_GET['name'] ?? null;
		echo $restaurantData->getmenu($menu);
		break;

	default:
		echo json_encode(["Invalid Request"]);
		break;
}
?>
