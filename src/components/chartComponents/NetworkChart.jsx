import React from "react";
// import ReactDOM from "react-dom";
import Graph from "react-vis-network-graph";
import { output2 } from "./SankeyChart"; 

// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";



 
export default function NetworkChart() {

  const allNodes = output2.sprints.reduce((acc, sprint) => {
      return [...acc, ...sprint.map(data => {
        const lab = String(data.id)
        return {id: data.id, label: lab, title:''}
      })]
    
  }, [])

  const uniqueNodes = [];
  const visitedNodes = [];
  allNodes.forEach((node)=>{
    if(!visitedNodes.includes(node.id)){
      uniqueNodes.push(node);
      visitedNodes.push(node.id);
    }
  })
  
  // const uniqueNodes = allNodes.slice(1,5);

  const graph = {
    nodes : uniqueNodes,
    edges : output2.sprints.reduce((acc, sprint) => {
      return [...acc, ...sprint.reduce((acc, data) => {
        if(data.dependencies.length){
          const test = data.dependencies.reduce((acc, element) => {
            return [...acc, ({from: data.id, to: element})]
          }, [])
            return [...acc, ...test]
        }
        return acc;
      }, [])]
    
  }, [])
  }

  // console.log("GRAPH: ", graph)
  // console.log("CHECK", graph)
  


  const dummyGraph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      // { from: 3, to: 4 },
    ]
  };
  console.log("Graph: ", graph)
  console.log("DUMMY: ", dummyGraph)
 
  const options = {
    layout: {
      hierarchical: true
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };
 
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}



//------------------------------------------------------
// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

// export default function NetworkChart() {
//   const svgRef = useRef(null);

//   useEffect(() => {
//   const nodes = [
//     { id: 'A', group: 1 },
//     { id: 'B', group: 1 },
//     { id: 'C', group: 2 },
//     { id: 'D', group: 3 },
//     { id: 'E', group: 3 },
//   ];

//   const links = [
//     { source: 'A', target: 'B' },
//     { source: 'A', target: 'C' },
//     { source: 'B', target: 'C' },
//     { source: 'D', target: 'E' },
//   ];

//   const svg = d3.select(svgRef.current);
//   const width = svg.node().getBoundingClientRect().width;
//   const height = svg.node().getBoundingClientRect().height;

//   const simulation = d3.forceSimulation(nodes)
//     .force('link', d3.forceLink(links).id(d => d.id))
//     .force('charge', d3.forceManyBody().strength(-50))
//     .force('center', d3.forceCenter(width / 2, height / 2));

//   const link = svg.selectAll('.link')
//     .data(links)
//     .join('line')
//     .attr('class', 'link');

//   const node = svg.selectAll('.node')
//     .data(nodes)
//     .join('circle')
//     .attr('class', 'node')
//     .attr('r', 5)
//     .attr('fill', d => d3.schemeCategory10[d.group]);

//   node.append('title').text(d => d.id);

//   simulation.on('tick', () => {
//     link
//       .attr('x1', d => d.source.x)
//       .attr('y1', d => d.source.y)
//       .attr('x2', d => d.target.x)
//       .attr('y2', d => d.target.y);

//     node
//       .attr('cx', d => d.x)
//       .attr('cy', d => d.y);
//   });
// }, []);

// console.log("SHIT: ", svgRef.current)


//   return <div style={{height:100, width:200}} ref={svgRef}></div>;
// }
