require('terriajs-cesium/Source/Widgets/widgets.css');
var BuildModuleUrl = require('terriajs-cesium/Source/Core/buildModuleUrl');
BuildModuleUrl.setBaseUrl('./');

var Viewer = require('terriajs-cesium/Source/Widgets/Viewer/Viewer');
var CesiumTerrainProvider = require('terriajs-cesium/Source/Core/CesiumTerrainProvider');

var viewer = new Viewer('cesiumContainer');

var cesiumTerrainProviderMeshes = new CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});

viewer.terrainProvider = cesiumTerrainProviderMeshes;
