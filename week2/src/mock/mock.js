import Mock from "mockjs"

//mock模拟数据
const arr = ["精选","快手食谱","甜点饮品","生活百科"]
Mock.mock("/api/list", {
    "result|4": [
        {
            "nav|+1": arr,
            "id|+1": 0,
            "foods|3-6": [
                {
                    title: "@ctitle",
                    img: "@image(150x100)",
                    title: "@ctitle",
                    "num|200-2000": 200
                }
            ]
        }

    ]
})