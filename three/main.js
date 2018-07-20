const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


const geometry = new THREE.CubeGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)


camera.position.z = 5

function animate () {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera)
}
// animate()



var loader = new THREE.FontLoader();
let textGeometry = ''
let textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
loader.load( './fonts/helvetiker_bold.typeface.json', function ( font ) {
  textGeometry = new THREE.TextGeometry( 'Hello three.js!', {
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelSegments: 5
  } );
} );
let textMesh = new THREE.Mesh(textGeometry, textMaterial)
textMesh.position.x = 0
textMesh.position.y = 0
textMesh.position.z = 0

scene.add(textMesh)
renderer.render(scene, camera)