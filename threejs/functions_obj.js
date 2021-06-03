		
//  <!-- ------------------------------- 1 obj function--------------------------------------- -->
function FirstPopup(){
    
    const scene2 = new THREE.Scene();
          scene2.background = new THREE.Color( 0xdddddd );
    const camera2 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer2 = new THREE.WebGLRenderer();
          renderer2.setSize( 620, 400 );
          document.getElementById('divobj1').appendChild( renderer2.domElement);

          controls= new THREE.OrbitControls(camera2, renderer2.domElement);
          camera2.position.z = 100;

          controls.minDistance = 60;
          controls.maxDistance = 150;


    
// -------------------------------------plate object---------------------------------------

    var OBJFile2 = 'plate/plate.obj';
    var MTLFile2 = 'plate/plate.mtl';
    var JPGFile2 = 'plate/plate.png';

            new THREE.MTLLoader()
                .load(MTLFile2, function (materials2) {
                      materials2.preload();
            new THREE.OBJLoader()
                .setMaterials(materials2)
                .load(OBJFile2, function (object2) {
        
    var texture = new THREE.TextureLoader().load(JPGFile2);

            object2.traverse(function (child) {   // aka setTexture
                if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                }
            });

                                
        scene2.add(object2);
            });
    });



// ------------------------------------cake 1-----------------------------

    var OBJFile3 = 'Cake2/Cake2.obj';
    var MTLFile3 = 'Cake2/Cake2.mtl';
    var JPGFile3 = 'Cake2/Cake2.png';

            new THREE.MTLLoader()
                .load(MTLFile3, function (materials) {
                materials.preload();
                new THREE.OBJLoader()
                .setMaterials(materials)
                .load(OBJFile3, function (object) {
                    
                    var texture = new THREE.TextureLoader().load(JPGFile3);

                    object.traverse(function (child) {   // aka setTexture
                        if (child instanceof THREE.Mesh) {
                            child.material.map = texture;
                        }
                    });
                    object.scale.x = object.scale.y = object.scale.z = 0.3;
                        scene2.position.y=-40
                        object.position.z=7
                        scene2.rotation.x=-Math.PI / 2;
                        scene2.add(object);



                       

                });
            });


// -------------------------------scene 2 Light------------


    var keyLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight2.position.set(-100, 0, 100);
    var fillLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight2.position.set(100, 0, 100);
    var backLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight2.position.set(100, 0, -100).normalize();

        scene2.add(keyLight2);
        scene2.add(fillLight2);
        scene2.add(backLight2);     

             // game logic, draw scene

    const animate2 = function () {
            requestAnimationFrame( animate2 );

                // cube2.rotation.x += 0.01;
                // cube2.rotation.y += 0.01;

                renderer2.render( scene2, camera2 );
            };

            animate2();

                    
        

}


//  <!-- ------------------------------- 2 obj function--------------------------------------- -->
function SecondPopup(){

    const scene3 = new THREE.Scene();
          scene3.background = new THREE.Color( 0xdddddd );
    const camera3 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer3 = new THREE.WebGLRenderer();
          renderer3.setSize( 620, 400 );
          document.getElementById('divobj2').appendChild( renderer3.domElement);

          controls= new THREE.OrbitControls(camera3, renderer3.domElement);
          camera3.position.z = 60;
          
          controls.minDistance = 38;
          controls.maxDistance = 80;

   // --------------------------------Cake 2--------------------

   var OBJFile = 'Cake1/Cake1.obj';
   var MTLFile = 'Cake1/Cake1.mtl';
   var JPGFile = 'Cake1/Cake1.png';

            new THREE.MTLLoader()
            .load(MTLFile, function (materials) {
                materials.preload();
                    new THREE.OBJLoader()
                    .setMaterials(materials)
                    .load(OBJFile, function (object) {
               
                    var texture = new THREE.TextureLoader().load(JPGFile);

                    object.traverse(function (child) {   // aka setTexture
                       if (child instanceof THREE.Mesh) {
                       child.material.map = texture;
                   }
               });
               
               scene3.add(object);
            });
        });

                scene3.position.y=-20
                scene3.rotation.x=-Math.PI / 2;


// -------------------------------------plate object---------------------------------------

    var OBJFile2 = 'plate/plate.obj';
    var MTLFile2 = 'plate/plate.mtl';
    var JPGFile2 = 'plate/plate.png';

            new THREE.MTLLoader()
                .load(MTLFile2, function (materials2) {
                materials2.preload();
            new THREE.OBJLoader()
                .setMaterials(materials2)
                .load(OBJFile2, function (object2) {

    var texture = new THREE.TextureLoader().load(JPGFile2);

        object2.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
            child.material.map = texture;
            }
        });

        object2.scale.x = object2.scale.y = object2.scale.z = 0.5;

        object2.position.z=-5.5

               
        scene3.add(object2);
   });
});



// ----------------------------scene 3 light----------------------------------

    var keyLight3 = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight3.position.set(-100, 0, 100);
    var fillLight3 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight3.position.set(100, 0, 100);
    var backLight3 = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight3.position.set(100, 0, -100).normalize();

        scene3.add(keyLight3);
        scene3.add(fillLight3);
        scene3.add(backLight3);


                 // game logic, draw Scene

    const animate3 = function () {
          requestAnimationFrame( animate3 );

        // cube3.rotation.x += 0.01;
        // cube3.rotation.y += 0.01;

          renderer3.render( scene3, camera3 );
    };

                animate3();

}   