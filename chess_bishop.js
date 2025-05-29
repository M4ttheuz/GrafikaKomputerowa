// Inicjalizacja sceny, kamery i renderera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(0, 8, 16);
camera.lookAt(0, 3, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(600, 600);
document.getElementById('chess3d').appendChild(renderer.domElement);

// Światło
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.1);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Materiały
const material = new THREE.MeshPhongMaterial({ color: 0x222222, shininess: 80 });
const slotMaterial = new THREE.MeshPhongMaterial({ color: 0xeeeeee, shininess: 100 });

// Podstawa
const base = new THREE.Mesh(
  new THREE.CylinderGeometry(2, 2.2, 1, 48),
  material
);
base.position.y = 0.5;

// Dolna część
const lower = new THREE.Mesh(
  new THREE.CylinderGeometry(1.5, 2, 1.5, 48),
  material
);
lower.position.y = 1.75;

// Środkowa część
const middle = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1.5, 2, 48),
  material
);
middle.position.y = 3.25;

// Górna część
const upper = new THREE.Mesh(
  new THREE.CylinderGeometry(0.7, 1, 1.2, 48),
  material
);
upper.position.y = 4.85;

// Kołnierz (szeroki, cienki torus pod główką)
const collar = new THREE.Mesh(
  new THREE.TorusGeometry(1.05, 0.18, 24, 64),
  material
);
collar.position.y = 5.7;
collar.rotation.x = Math.PI / 2;

// Główka (bardziej owalna)
const head = new THREE.Mesh(
  new THREE.SphereGeometry(0.95, 32, 32),
  material
);
head.scale.y = 1.3; // wydłużenie pionowe
head.position.y = 6.1;

// Nacięcie (slot) na główce - cienki cylinder w jasnym kolorze
const slot = new THREE.Mesh(
  new THREE.CylinderGeometry(0.13, 0.13, 1.2, 32),
  slotMaterial
);
slot.position.y = 6.1;
slot.rotation.z = Math.PI / 6; // lekko pod kątem

// Mała czapka (półkula na czubku głowy)
const cap = new THREE.Mesh(
  new THREE.SphereGeometry(0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI / 1.1),
  material
);
cap.position.y = 7.15;

// Mała kulka na czubku czapki (opcjonalnie)
const capBall = new THREE.Mesh(
  new THREE.SphereGeometry(0.13, 16, 16),
  material
);
capBall.position.y = 7.45;

// Grupa gonca
const bishop = new THREE.Group();
bishop.add(base);
bishop.add(lower);
bishop.add(middle);
bishop.add(upper);
bishop.add(collar);
bishop.add(head);
bishop.add(slot);
bishop.add(cap);
bishop.add(capBall);

scene.add(bishop);

// Animacja (obrót)
function animate() {
  requestAnimationFrame(animate);
  bishop.rotation.y += 0.008;
  renderer.render(scene, camera);
}
animate(); 