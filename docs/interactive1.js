var spec1 = {
  "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
  "hconcat": [
    {
      "layer": [
        {
          "mark": {"type": "circle", "size": 60},
          "encoding": {
            "tooltip": [
              {"type": "nominal", "field": "name"},
              {"type": "nominal", "field": "original"}
            ],
            "x": {
              "type": "quantitative",
              "axis": {"title": "man"},
              "field": "x_axis"
            },
            "y": {
              "type": "quantitative",
              "axis": {"title": "woman"},
              "field": "y_axis"
            }
          },
          "selection": {
            "selector003": {
              "type": "interval",
              "bind": "scales",
              "encodings": ["x", "y"]
            }
          },
          "title": "man vs. woman"
        },
        {
          "mark": {"type": "text", "color": "black", "dx": -15, "dy": 3},
          "encoding": {
            "text": {"type": "nominal", "field": "original"},
            "x": {
              "type": "quantitative",
              "axis": {"title": "man"},
              "field": "x_axis"
            },
            "y": {
              "type": "quantitative",
              "axis": {"title": "woman"},
              "field": "y_axis"
            }
          }
        }
      ],
      "data": {"name": "data-15774a1af3e17e7d98478860e09ed029"},
      "height": 300,
      "width": 300
    },
    {
      "layer": [
        {
          "mark": {"type": "circle", "size": 60},
          "encoding": {
            "tooltip": [
              {"type": "nominal", "field": "name"},
              {"type": "nominal", "field": "original"}
            ],
            "x": {
              "type": "quantitative",
              "axis": {"title": "(man | (king - queen))"},
              "field": "x_axis"
            },
            "y": {
              "type": "quantitative",
              "axis": {"title": "(woman | (king - queen))"},
              "field": "y_axis"
            }
          },
          "selection": {
            "selector002": {
              "type": "interval",
              "bind": "scales",
              "encodings": ["x", "y"]
            }
          },
          "title": "(man | (king - queen)) vs. (woman | (king - queen))"
        },
        {
          "mark": {"type": "text", "color": "black", "dx": -15, "dy": 3},
          "encoding": {
            "text": {"type": "nominal", "field": "original"},
            "x": {
              "type": "quantitative",
              "axis": {"title": "(man | (king - queen))"},
              "field": "x_axis"
            },
            "y": {
              "type": "quantitative",
              "axis": {"title": "(woman | (king - queen))"},
              "field": "y_axis"
            }
          }
        }
      ],
      "data": {"name": "data-5ef8856a00a327788b3c3840144bb429"},
      "height": 300,
      "width": 300
    }
  ],
  "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
  "datasets": {
    "data-15774a1af3e17e7d98478860e09ed029": [
      {
        "x_axis": 0.40951526165008545,
        "y_axis": 0.3261851966381073,
        "name": "prince",
        "original": "prince"
      },
      {
        "x_axis": 0.27098548412323,
        "y_axis": 0.4069218039512634,
        "name": "princess",
        "original": "princess"
      },
      {
        "x_axis": 0.3271060585975647,
        "y_axis": 0.5211429595947266,
        "name": "nurse",
        "original": "nurse"
      },
      {
        "x_axis": 0.4489893317222595,
        "y_axis": 0.4943573474884033,
        "name": "doctor",
        "original": "doctor"
      },
      {
        "x_axis": 0.19353565573692322,
        "y_axis": 0.09302382916212082,
        "name": "banker",
        "original": "banker"
      },
      {
        "x_axis": 0.38155144453048706,
        "y_axis": 0.33430397510528564,
        "name": "cousin",
        "original": "cousin"
      },
      {
        "x_axis": 0.29427674412727356,
        "y_axis": 0.41036874055862427,
        "name": "neice",
        "original": "neice"
      },
      {
        "x_axis": 0.45961007475852966,
        "y_axis": 0.27491992712020874,
        "name": "king",
        "original": "king"
      },
      {
        "x_axis": 0.2914373576641083,
        "y_axis": 0.40253907442092896,
        "name": "queen",
        "original": "queen"
      },
      {
        "x_axis": 0.6322574615478516,
        "y_axis": 0.37293168902397156,
        "name": "dude",
        "original": "dude"
      },
      {
        "x_axis": 0.689598560333252,
        "y_axis": 0.4880948066711426,
        "name": "guy",
        "original": "guy"
      },
      {
        "x_axis": 0.30102455615997314,
        "y_axis": 0.3522968888282776,
        "name": "gal",
        "original": "gal"
      },
      {
        "x_axis": 0.4537816643714905,
        "y_axis": 0.31863078474998474,
        "name": "fire",
        "original": "fire"
      },
      {
        "x_axis": 0.4621913731098175,
        "y_axis": 0.4013059139251709,
        "name": "dog",
        "original": "dog"
      },
      {
        "x_axis": 0.3758322596549988,
        "y_axis": 0.34616324305534363,
        "name": "cat",
        "original": "cat"
      },
      {
        "x_axis": 0.2176199108362198,
        "y_axis": 0.18362130224704742,
        "name": "mouse",
        "original": "mouse"
      },
      {
        "x_axis": 0.2972288429737091,
        "y_axis": 0.3045094907283783,
        "name": "red",
        "original": "red"
      },
      {"x_axis": 0, "y_axis": 0, "name": "bluee", "original": "bluee"},
      {
        "x_axis": 0.25164204835891724,
        "y_axis": 0.215010866522789,
        "name": "green",
        "original": "green"
      },
      {
        "x_axis": 0.2725669741630554,
        "y_axis": 0.25106003880500793,
        "name": "yellow",
        "original": "yellow"
      },
      {
        "x_axis": 0.335124671459198,
        "y_axis": 0.2691221237182617,
        "name": "water",
        "original": "water"
      },
      {
        "x_axis": 0.538722574710846,
        "y_axis": 0.5015737414360046,
        "name": "person",
        "original": "person"
      },
      {
        "x_axis": 0.3436667323112488,
        "y_axis": 0.3416234254837036,
        "name": "family",
        "original": "family"
      },
      {
        "x_axis": 0.5816835165023804,
        "y_axis": 0.39277997612953186,
        "name": "brother",
        "original": "brother"
      },
      {
        "x_axis": 0.3568364381790161,
        "y_axis": 0.4736946225166321,
        "name": "sister",
        "original": "sister"
      }
    ],
    "data-5ef8856a00a327788b3c3840144bb429": [
      {
        "x_axis": 0.3721413016319275,
        "y_axis": 0.37740591168403625,
        "name": "(prince | (king - queen))",
        "original": "prince"
      },
      {
        "x_axis": 0.32078519463539124,
        "y_axis": 0.3907199800014496,
        "name": "(princess | (king - queen))",
        "original": "princess"
      },
      {
        "x_axis": 0.38499051332473755,
        "y_axis": 0.5041420459747314,
        "name": "(nurse | (king - queen))",
        "original": "nurse"
      },
      {
        "x_axis": 0.46731048822402954,
        "y_axis": 0.5102049708366394,
        "name": "(doctor | (king - queen))",
        "original": "doctor"
      },
      {
        "x_axis": 0.1731649786233902,
        "y_axis": 0.11744287610054016,
        "name": "(banker | (king - queen))",
        "original": "banker"
      },
      {
        "x_axis": 0.3942609429359436,
        "y_axis": 0.3473650813102722,
        "name": "(cousin | (king - queen))",
        "original": "cousin"
      },
      {
        "x_axis": 0.3400344252586365,
        "y_axis": 0.39806586503982544,
        "name": "(neice | (king - queen))",
        "original": "neice"
      },
      {
        "x_axis": 0.3779345750808716,
        "y_axis": 0.3594277501106262,
        "name": "(king | (king - queen))",
        "original": "king"
      },
      {
        "x_axis": 0.3779345750808716,
        "y_axis": 0.35942772030830383,
        "name": "(queen | (king - queen))",
        "original": "queen"
      },
      {
        "x_axis": 0.6412995457649231,
        "y_axis": 0.3981958031654358,
        "name": "(dude | (king - queen))",
        "original": "dude"
      },
      {
        "x_axis": 0.6984968185424805,
        "y_axis": 0.5187848806381226,
        "name": "(guy | (king - queen))",
        "original": "guy"
      },
      {
        "x_axis": 0.3681216537952423,
        "y_axis": 0.32252824306488037,
        "name": "(gal | (king - queen))",
        "original": "gal"
      },
      {
        "x_axis": 0.46388524770736694,
        "y_axis": 0.3355717957019806,
        "name": "(fire | (king - queen))",
        "original": "fire"
      },
      {
        "x_axis": 0.47540125250816345,
        "y_axis": 0.4186546504497528,
        "name": "(dog | (king - queen))",
        "original": "dog"
      },
      {
        "x_axis": 0.398105651140213,
        "y_axis": 0.3522307574748993,
        "name": "(cat | (king - queen))",
        "original": "cat"
      },
      {
        "x_axis": 0.22983808815479279,
        "y_axis": 0.187143474817276,
        "name": "(mouse | (king - queen))",
        "original": "mouse"
      },
      {
        "x_axis": 0.3163382112979889,
        "y_axis": 0.30910223722457886,
        "name": "(red | (king - queen))",
        "original": "red"
      },
      {
        "x_axis": 0,
        "y_axis": 0,
        "name": "(bluee | (king - queen))",
        "original": "bluee"
      },
      {
        "x_axis": 0.26152005791664124,
        "y_axis": 0.2223435342311859,
        "name": "(green | (king - queen))",
        "original": "green"
      },
      {
        "x_axis": 0.29196789860725403,
        "y_axis": 0.253030925989151,
        "name": "(yellow | (king - queen))",
        "original": "yellow"
      },
      {
        "x_axis": 0.34176596999168396,
        "y_axis": 0.2832501232624054,
        "name": "(water | (king - queen))",
        "original": "water"
      },
      {
        "x_axis": 0.5559191107749939,
        "y_axis": 0.5214522480964661,
        "name": "(person | (king - queen))",
        "original": "person"
      },
      {
        "x_axis": 0.3543766736984253,
        "y_axis": 0.35514166951179504,
        "name": "(family | (king - queen))",
        "original": "family"
      },
      {
        "x_axis": 0.5562112927436829,
        "y_axis": 0.4427803158760071,
        "name": "(brother | (king - queen))",
        "original": "brother"
      },
      {
        "x_axis": 0.40646934509277344,
        "y_axis": 0.46244552731513977,
        "name": "(sister | (king - queen))",
        "original": "sister"
      }
    ]
  }
}

vegaEmbed('#vis1', spec1);
