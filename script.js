let base_url = "http://localhost:81/restaurant.php"
let data=null;
        $("document").ready(function(){
            getItemsNameList();

        });

        function getItemsNameList() {
            let url = base_url + "?req=item_name";
            $.get(url,function(data,success){


        console.log(data[0]);
        var d=document.querySelector("#drop");
	d.addEventListener("click", dropdown);
	function dropdown(e) {
		//console.log(data);
		for(var i=0;i<data.length;i++)
		{
			var dl=document.querySelector("#drop");
			var op=document.dropElement("option");
			op.value=i;
			op.text=data[i].name;
			dl.appendChild(op);
        }
        var sel=document.getElementById('drop');
			var opt=sel.options[sel.selectedIndex];
			var s=opt.text;
            let url1 = base_url + "?req=menu_item&name="+s;
            $.get(url1,function(data1,success){
                console.log(data1);
                document.querySelector(".green").innerHTML=`<div class="panel panel-default">
				<div class="panel-heading">
			<h3 class="panel-title">Menu_items</h3>
				</div>
				<div class="panel-body">
				<div class="row">
				<div class="col-md-2">
				</div>
				<div class="col-md-8">
					<ul class="drop_menu">
						<li class="drop_menu-item"><b>Id</b>: `+data1.id+`</li>
						<li class="drop_menu-item"><b>Short name</b>: `+data1.short_name+`</li>
						<li class="drop_menu-item"><b>Name</b>: `+data1.name+`</li>
						<li class="drop_menu-item"><b>Description</b>: `+data1.description+`</li>
						<li class="drop_menu-item"><b>Price_small</b>: `+data1.price_small+`</li>
						<li class="drop_menu-item"><b>Price_large</b>: `+data1.price_large+`</li>
						<li class="drop_menu-item"><b>Small Portion Name</b>: `+data1.small_portion_name+`</li>
						<li class="drop_menu-item"><b>Large Portion Name</b>:`+data1.large_portion_name+` </li>
					</ul>

				</div>
				<div class="col-md-2">
				</div>
				</div>
				</div>
		</div>`;
            });



    }
            });
        }
