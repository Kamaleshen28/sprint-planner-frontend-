import React from "react";
import { Chart } from "react-google-charts";


// const output1 = {
//     sprints:
//       [
//         {
//           assignedDeveloperId: 1,
//           dependencies: [],
//           developers: [
//             { id: 1, name: 'mukul' },
//             { id: 2, name: 'sahil' },
//           ],
//           storyPoints: 6,
//           endDay: 3,
//           id: 4,
//           remainingDuration: 0,
//           startDay: 0,
//         },
//         {
//           assignedDeveloperId: 0,
//           dependencies: [],
//           developers: [
//             { id: 0, name: 'harbir' },
//             { id: 1, name: 'mukul' },
//             { id: 2, name: 'sahil' },
//           ],
//           storyPoints: 5,
//           endDay: 4,
//           id: 5,
//           remainingDuration: -1,
//           startDay: 0,
//         },
//         {
//           assignedDeveloperId: 0,
//           dependencies: [4, 5],
//           developers: [
//             { id: 0, name: 'harbir' },
//             { id: 2, name: 'sahil' },
//           ],
//           storyPoints: 5,
//           endDay: 7,
//           id: 0,
//           remainingDuration: -1,
//           startDay: 4,
//         },
//         {
//           assignedDeveloperId: 1,
//           dependencies: [5],
//           developers: [
//             { id: 1, name: 'mukul' },
//             { id: 0, name: 'harbir' },
//             { id: 2, name: 'sahil' },
//           ],
//           storyPoints: 4,
//           endDay: 8,
//           id: 2,
//           remainingDuration: -2,
//           startDay: 4,
//         },
//         {
//           assignedDeveloperId: 1,
//           dependencies: [2],
//           developers: [
//             { id: 1, name: 'mukul' },
//             { id: 0, name: 'harbir' },
//             { id: 2, name: 'sahil' },
//           ],
//           storyPoints: 2,
//           endDay: 9,
//           id: 3,
//           remainingDuration: -1,
//           startDay: 8,
//         },
//         {
//           assignedDeveloperId: 1,
//           dependencies: [3, 4],
//           developers: [
//             { id: 1, name: 'mukul' },
//             { id: 0, name: 'harbir' },
//             { id: 2, name: 'sahil' },
//           ],
//           storyPoints: 3,
//           endDay: 10,
//           id: 1,
//           remainingDuration: 0,
//           startDay: 9,
//         },
//     ],
    
// };

const output2 = {
    sprints: [
      [
        {
          id: 4,
          dependencies: [],
          storyPoints: 6,
          assignedDeveloperId: 0,
          startDay: 0,
          endDay: 6,
          remainingDuration: 0,
          developers: [{ id: 0, name: 'harbir' }],
        },
        {
          id: 5,
          dependencies: [],
          storyPoints: 5,
          assignedDeveloperId: 1,
          startDay: 0,
          endDay: 5,
          remainingDuration: 0,
          developers: [{ id: 1, name: 'mukul' }],
        },
        {
          id: 2,
          dependencies: [5],
          storyPoints: 4,
          assignedDeveloperId: 1,
          startDay: 5,
          endDay: 9,
          remainingDuration: 0,
          developers: [{ id: 1, name: 'mukul' }],
        },
        {
          id: 0,
          dependencies: [4, 5],
          storyPoints: 5,
          assignedDeveloperId: 0,
          startDay: 6,
          endDay: 11,
          remainingDuration: 0,
          developers: [{ id: 0, name: 'harbir' }],
        },
        {
          id: 3,
          dependencies: [2],
          storyPoints: 2,
          assignedDeveloperId: 1,
          startDay: 9,
          endDay: 11,
          remainingDuration: 0,
          developers: [{ id: 1, name: 'mukul' }],
        },
      ],
      [
        {
          id: 0,
          dependencies: [4, 5],
          storyPoints: 5,
          assignedDeveloperId: 0,
          startDay: 6,
          endDay: 11,
          remainingDuration: 0,
          developers: [{ id: 0, name: 'harbir' }],
        },
        {
          id: 3,
          dependencies: [2],
          storyPoints: 2,
          assignedDeveloperId: 1,
          startDay: 9,
          endDay: 11,
          remainingDuration: 0,
          developers: [{ id: 1, name: 'mukul' }],
        },
        {
          id: 1,
          dependencies: [3, 4],
          storyPoints: 3,
          assignedDeveloperId: 0,
          startDay: 11,
          endDay: 13,
          remainingDuration: -1,
          developers: [
            { id: 0, name: 'harbir' },
            { id: 1, name: 'mukul' },
          ],
        },
      ],
    ],
  };


const processEachSprint = (sprint) =>{
    return sprint.reduce((acc, story) => {
        if(story.dependencies.length){
            const mapping = story.dependencies.map(d => {
                return [story.id.toString(), d.toString(), 1]
            })
            return [...acc, ...mapping]
        }
        return acc;
    }, [])
} 

const data = output2.sprints.reduce((acc, sprint) => {
    return [...acc, ...processEachSprint(sprint)]
}, [])
data.unshift(["From", "To", "Weight"])
console.log("data: ", data)

const colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

                
// const options = {
//       height: 400,
//       sankey: {
//         node: {
//           colors: colors
//         },
//         link: {
//           colorMode: 'gradient',
//           colors: colors
//         }
//       }
// };

 const options = {
    sankey: {
      link: { color: { fill: "#d799ae" } },
      node: {
        colors: ["#a61d4c"],
        label: { color: "#871b47" },
        nodeWidth:"10"
      },
    },
  };

export default function SankeyChart() {
  return (
    <div className="sankeyChart--container">
        <div className="sankeyChart">
            <Chart
            chartType="Sankey"
            data={data}
            options={options}
            width="800px"
            height="500px"
            />
        </div>
        
    </div>
    
  );
}
