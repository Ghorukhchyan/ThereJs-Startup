   
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  
    var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        // renderer.domElement.style.position = 'absolute';         

        renderer2 = new THREE.CSS3DRenderer();
        renderer2.setSize( window.innerWidth, window.innerHeight );
        renderer2.domElement.style.position = 'absolute';
        renderer2.domElement.style.top = 0;
        document.body.appendChild( renderer2.domElement );
        
                                // when screen size is changeing

        window.addEventListener("resize" , function()
            {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            renderer2.setSize(width,height);
            camera.aspect= width / height;
            camera.updateProjectionMatrix();
            });

                            // controls (mooves)

        controls= new THREE.OrbitControls(camera, renderer2.domElement);

        // controls.minDistance = 0;
        // controls.maxDistance = 25;

                                // create the shapez geometry

    const geometry = new THREE.SphereGeometry( 50, 50, 50 );
    var material = new THREE.MeshBasicMaterial( 
		{map:new THREE.TextureLoader().load('/img/360pic2.jpeg'), side: THREE.DoubleSide}
		)

                                //create a material, colour, or image texture  (cube)
    var spherematerial = new THREE.MeshFaceMaterial( material );
    var sphere = new THREE.Mesh( geometry, spherematerial );
        scene.add( sphere );

        camera.position.z =1;

        
// --------------------------------------plane objects ---------------------------------


function makeInstance(width, height, color,  x, y, z , rot_x, rot_y, rot_z , id) {

    var element = document.createElement( 'div' );
        element.id = id;
        document.body.appendChild(element);

        element.style.cursor = "pointer";
        element.style.width = width;
        element.style.height = height;
        element.style.opacity = 0.999;
        element.style.background= color;
        element.style.position = "relative";
        element.style.zIndex= 100;
        
    var domObject = new THREE.CSS3DObject( element );
        element.parent = domObject;

        domObject.position.x=x;
        domObject.position.y=y;
        domObject.position.z=z;
        
        domObject.rotation.x = rot_x;
        domObject.rotation.y = rot_y;
        domObject.rotation.z = rot_z;
        
        scene.add( domObject );

        return domObject;

    }

    const divs = 

            [
               makeInstance("5" ,"5" , "green",-24.5 , 1.3 , 15, 0 ,Math.PI / 2 , 0 , "divid1") ,
               makeInstance("5", "5" , "red", 24.5 , -4 , 18 , 0 ,Math.PI / 2 , 0, "divid2")
                      
            ];
               
                            // ------------------------------------------------------------------------------

    // var geometry_plane = new THREE.PlaneGeometry( 5, 5, 5 );
    // var material_plane = new THREE.MeshBasicMaterial({opacity: 100 , transparent: true,});
    // var plane = new THREE.Mesh( geometry_plane, material_plane );
    //   plane.position.x = -24.9;
    //   plane.position.y = 1.3;
    //   plane.position.z = -10.4;

    //   plane.rotation.y = Math.PI / 2;
    
    

    // scene.add( plane );



    // --------------------------------------plane object 2 ---------------------------------

    // var geometry_plane_2 = new THREE.PlaneGeometry( 5, 5, 5 );
    // var material_plane_2 = new THREE.MeshBasicMaterial({opacity: 100 , transparent: true,});
    // var plane_2 = new THREE.Mesh( geometry_plane_2, material_plane_2 );
    //   plane_2.position.x = -24.9;
    //   plane_2.position.y =  1.3;
    //   plane_2.position.z = 12;

    //   plane_2.rotation.y = Math.PI / 2;
    
    

    // scene.add( plane_2 );






    // --------------------------------------second object ---------------------------------

    // var geometry2 = new THREE.BoxGeometry(5 , 5, 5);
    //   var CubeMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
    //   var mesh2 = new THREE.Mesh( geometry2,CubeMaterial2 );

    //   mesh2.position.x = -23;
    //   mesh2.position.y = 2;
    //   mesh2.position.z = -9;
    //   scene.add(mesh2)


    // --------------------------------------Lighting ---------------------------------


    //   light = new THREE.HemisphereLight(0xff0000, 0x777788, 0.75);
    //   light.position.set(0.5, 1, 0.75);
    //   scene.add(light);




                                            // game logic
        var update = function(){
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.005;
    };

                                            // draw Scene
        var render= function(){
        renderer.render(scene, camera);
        renderer2.render(scene, camera);

    }

                                    // run game loop (update , render , repeat)
        var GameLoop = function(){
        requestAnimationFrame(GameLoop);
        update();  
        render();
    }
        GameLoop();
        //   --------------------------