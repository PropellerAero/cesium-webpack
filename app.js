require('terriajs-cesium/Source/Widgets/widgets.css');
var BuildModuleUrl = require('terriajs-cesium/Source/Core/buildModuleUrl');
BuildModuleUrl.setBaseUrl('./');

var Viewer = require('terriajs-cesium/Source/Widgets/Viewer/Viewer');
var CesiumTerrainProvider = require('terriajs-cesium/Source/Core/CesiumTerrainProvider');
var PropellerTerrainProvider = require('propeller-js/lib/Cesium/CesiumTerrainProvider');

var viewer = new Viewer('cesiumContainer');

document.propeller = {};

if (1) {

    var cesiumTerrainProviderMeshes = new CesiumTerrainProvider({
        url: 'https://assets.agi.com/stk-terrain/world',
        requestWaterMask: true,
        requestVertexNormals: true
    });

    viewer.terrainProvider = cesiumTerrainProviderMeshes;

} else {

    var propellerTerrainProvider = new PropellerTerrainProvider({
        url: 'https://assets.agi.com/stk-terrain/world',
        requestWaterMask: true,
        requestVertexNormals: true
    });

    viewer.terrainProvider = propellerTerrainProvider;

}
