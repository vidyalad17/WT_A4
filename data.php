<?php

class RestaurantData{
	private $datalist;

	function  __construct(array $datalist)
	{
		if(sizeof($datalist)>0)
		{
		$this->datalist=$datalist;
		}
		else
		{
			throw new Exception("Empty Array");
		}
	}
	public function get_items()
	{

		$itemNameList=[];
		foreach($this->datalist as $menuitem)
		{
			$itemNameList[]=array(
				"name"=>$menuitem["name"]
			);
		}
		return json_encode($itemNameList);
	}
	public function getmenu($menu)
	{
		$response=["Invalid Request"];

		if($menu)
		{

			foreach($this->$datalist as $menuitem){

				if(strcmp($menu,$menuitem["name"])==0)
				{

					$response=$menuitem;
					break;
				}
			}
		}
		return json_encode($response);
	}

}
?>
