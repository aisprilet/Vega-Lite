// Load HW_III data
const dataUrl = "HW_III.csv";

// Donut Chart showing Rep and Total
const donutSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "Total Sales by Rep", "fontSize": 16, "fontWeight": "bold"},
    "data": {"url": dataUrl, "format": {"type": "csv"}},
    "mark": {"type": "arc", "innerRadius": 50},
    "encoding": {
      "theta": {"field": "Total", "type": "quantitative"},
      "color": {"field": "Rep", "type": "nominal"}
    },
    "config": {"view": {"stroke": "transparent"}}
  };
  
  // View showing correlation between Units and Unit Cost with Rectangular Brush
  const correlationSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "Correlation between Units and Unit Cost", "fontSize": 16, "fontWeight": "bold"},
    "data": {"url": dataUrl, "format": {"type": "csv"}},
    // "mark": "point",
    // "encoding": {
    //   "x": {"field": "Units", "type": "quantitative"},
    //   "y": {"field": "Unit Cost", "type": "quantitative"},
    //   "color": {"field": "Item", "type": "nominal"}
    // },
    // "selection": {"brush": {"type": "interval", "encodings": ["x"]}},

    
    "selection": {"brush": {"type": "interval"}},
    "mark": "point",
    "encoding": {
        "x": {"field": "Units", "type": "quantitative"},
        "y": {"field": "Unit Cost", "type": "quantitative"},
        "color": {
            "condition": {
                "selection": "brush",
                "field": "Item",
                "type": "nominal"
            },
            "value": "grey"
        },
        "tooltip": [
            {"field": "Units", "type": "quantitative"},
            {"field": "Unit Cost", "type": "quantitative"}
        ]
    },

   "config": {"view": {"stroke": "transparent"}}



  };
  
  // Streamgraph showing how Total varied over time for each Item, color by Item
  const streamgraphSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "Total Sales Variation Over Time", "fontSize": 16, "fontWeight": "bold"},
    "data": {"url": dataUrl, "format": {"type": "csv"}},
    "mark": {"type": "area"},
    "encoding": {
      "x": {"field": "OrderDate", "type": "temporal"},
      "y": {"field": "Total", "type": "quantitative", "stack": "center"},
      "color": {"field": "Item", "type": "nominal"},
      "tooltip": [
        {"field": "Item", "type": "nominal"},
        {"field": "Total", "type": "quantitative"}
      ]
    },
    "resolve": {"scale": {"color": "independent"}},
    "config": {"view": {"stroke": "transparent"}}
  };
  
  // Histogram of Units with overlay of global mean
  const histogramSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {"text": "Distribution of Units Sold", "fontSize": 16, "fontWeight": "bold"},
    "data": {"url": dataUrl, "format": {"type": "csv"}},
    "layer": [
      {
        "mark": "bar",
        "encoding": {
          "x": {"field": "Units", "type": "quantitative", "bin": true},
          "y": {"aggregate": "count", "type": "quantitative"},
          "color": {"field": "Item", "type": "nominal"},
          "tooltip": [
            {"field": "Units", "type": "quantitative", "title": "Units"},
            {"field": "count", "type": "quantitative", "aggregate": "count", "title": "Count"}
          ]
        }
      },
      {
        "mark": "rule",
        "encoding": {
          "x": {"field": "Units", "type": "quantitative", "aggregate": "mean"},
          "color": {"value": "blue"},
          "size": {"value": 2},
          "tooltip": [
            {"field": "Units", "type": "quantitative", "aggregate": "mean", "title": "Mean Units"}
          ]
        }
      }
    ],
    "resolve": {"scale": {"color": "independent"}},
    "config": {"view": {"stroke": "transparent"}}
  };
  
  // Render all visualizations
  vegaEmbed('#donutChart', donutSpec);
  vegaEmbed('#correlationView', correlationSpec);
  vegaEmbed('#streamgraph', streamgraphSpec);
  vegaEmbed('#histogram', histogramSpec);
  

// // Donut Chart showing Rep and Total
// const donutSpec = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "data": {"url": dataUrl, "format": {"type": "csv"}},
//     "mark": {"type": "arc", "innerRadius": 50},
//     "encoding": {
//       "theta": {"field": "Total", "type": "quantitative"},
//       "color": {"field": "Rep", "type": "nominal"}
//     }
//   };
  
//   // View showing correlation between Units and Unit Cost with Rectangular Brush
//   const correlationSpec = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "data": {"url": dataUrl, "format": {"type": "csv"}},
//     "mark": "point",
//     "encoding": {
//       "x": {"field": "Units", "type": "quantitative"},
//       "y": {"field": "Unit Cost", "type": "quantitative"},
//       "color": {"field": "Item", "type": "nominal"}
//     },
//     "selection": {
//       "brush": {"type": "interval", "encodings": ["x"]}
//     }
//   };
  
//   // Streamgraph showing how Total varied over time for each Item, color by Item
//   const streamgraphSpec = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "data": {"url": dataUrl, "format": {"type": "csv"}},
//     "mark": {"type": "area"},
//     "encoding": {
//       "x": {"field": "OrderDate", "type": "temporal"},
//       "y": {"field": "Total", "type": "quantitative", "stack":"center"},
//       "color": {"field": "Item", "type": "nominal"},
//       "tooltip": [
//         {"field": "Item", "type": "nominal"},
//         {"field": "Total", "type": "quantitative"}
//     ]
//     },
//     "resolve": {"scale": {"color": "independent"}}
//   };

  
// const histogramSpec = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "data": {"url": dataUrl, "format": {"type": "csv"}},
//     "layer": [
//       {
//         "mark": "bar",
//         "encoding": {
//           "x": {"field": "Units", "type": "quantitative", "bin": true},
//           "y": {"aggregate": "count", "type": "quantitative"},
//           "color": {"field": "Item", "type": "nominal"},
//           "tooltip": [
//             {"field": "Units", "type": "quantitative", "title": "Units"},
//             {"field": "count", "type": "quantitative", "aggregate": "count", "title": "Count"}
//           ]
//         }
//       },
//       {
//         "mark": "rule",
//         "encoding": {
//           "x": {"field": "Units", "type": "quantitative", "aggregate": "mean"},
//           "color": {"value": "blue"}, // Change color to blue
//           "size": {"value": 2},
//           "tooltip": [
//             {"field": "Units", "type": "quantitative", "aggregate": "mean", "title": "Mean Units"}
//           ]
//         }
//       }
//     ],
//     "resolve": {"scale": {"color": "independent"}}
//   };
  
  
//   // Render all visualizations
//   vegaEmbed('#donutChart', donutSpec);
//   vegaEmbed('#correlationView', correlationSpec);
//   vegaEmbed('#streamgraph', streamgraphSpec);
//   vegaEmbed('#histogram', histogramSpec);


