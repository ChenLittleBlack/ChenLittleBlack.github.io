
import React from 'react'
import { Template } from '../components/template';
const config = {
    "name": "谁赞成，谁反对",
    "url": "/shuifandui/",
    "gif": "/template/shuifandui.gif",
    "config": [
        {
            "default": "我话说完了",
            "startTime": 0.3,
            "endTime": 1.7
        },
        {
            "default": "谁赞成",
            "startTime": 2.63,
            "endTime": 3.2
        },
        {
            "default": "谁反对",
            "startTime": 3.8,
            "endTime": 4.7
        },
        {
            "default": "我反对",
            "startTime": 4.9,
            "endTime": 5.55
        }
    ]
}

export { config };
export default () => (
    <Template element={config} />
)