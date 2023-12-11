import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import ThreeMeshUI from 'three-mesh-ui'


window.THREE = THREE

window.RGBELoader = RGBELoader
window.OrbitControls = OrbitControls
window.GLTFLoader = GLTFLoader

window.ThreeMeshUI = ThreeMeshUI

import FontJSON from './Roboto-msdf.json'
import FontImage from './Roboto-msdf.png'

window.FontJSON = FontJSON
window.FontImage = FontImage
