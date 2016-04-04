require('cesium/Source/Widgets/widgets.css');
var BuildModuleUrl = require('cesium/Source/Core/buildModuleUrl');
BuildModuleUrl.setBaseUrl('./');

var Viewer = require('cesium/Source/Widgets/Viewer/Viewer');
var CesiumTerrainProvider = require('cesium/Source/Core/CesiumTerrainProvider');

var viewer = new Viewer('cesiumContainer');

var cesiumTerrainProviderMeshes = new CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/world',
    requestWaterMask: true,
    requestVertexNormals: true
});

viewer.terrainProvider = cesiumTerrainProviderMeshes;
