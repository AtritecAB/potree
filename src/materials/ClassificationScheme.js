
import * as THREE from "../../libs/three.js/build/three.module.js";

export const ClassificationScheme = {

	DEFAULT: {
		0:       { visible: true, name: 'never classified'  , color: [0.5,  0.5,  0.5,  1.0] },
		1:       { visible: true, name: 'unclassified'      , color: [0.5,  0.5,  0.5,  1.0] },
		2:       { visible: true, name: 'platform within tol', color: [0.0, 0.8,  0.0, 1.0] },
		3:       { visible: true, name: 'platform outside tol', color: [0.8,  0.0,  0.0,  1.0] },
		4:       { visible: true, name: 'platform highlight', color: [0.7,  0.7,  0.2,  1.0] },
		5:       { visible: true, name: 'rail 1'            , color: [0.6,  0.4,  0.1,  1.0] },
		6:       { visible: true, name: 'rail 2'            , color: [0.6,  0.4,  0.1,  1.0] },
		7:       { visible: true, name: 'low point(noise)'  , color: [1.0,  0.0,  1.0,  1.0] },
		8:       { visible: true, name: 'key-point'         , color: [1.0,  0.0,  0.0,  1.0] },
		9:       { visible: true, name: 'water'             , color: [0.0,  0.0,  1.0,  1.0] },
		12:      { visible: true, name: 'overlap'           , color: [1.0,  1.0,  0.0,  1.0] },
		DEFAULT: { visible: true, name: 'default'           , color: [0.3,  0.6,  0.6,  0.5] },
	}
};

Object.defineProperty(ClassificationScheme, 'RANDOM', {
	get: function() { 

		let scheme = {};

		for(let i = 0; i <= 255; i++){
			scheme[i] = new THREE.Vector4(Math.random(), Math.random(), Math.random());
		}

		scheme["DEFAULT"] = new THREE.Vector4(Math.random(), Math.random(), Math.random());

		return scheme;
	}
});