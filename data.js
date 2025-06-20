var APP_DATA = {
  "scenes": [
    {
      "id": "0-dressing-area",
      "name": "DRESSING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.22491057430105776,
        "pitch": -0.056695408822747595,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.271348871677324,
          "pitch": 0.5449074811241665,
          "rotation": 6.283185307179586,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.034017444704774746,
        "pitch": -0.16098831098591404,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2102841735389305,
          "pitch": -0.02786339873240884,
          "rotation": 0,
          "target": "0-dressing-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BEDROOM 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
