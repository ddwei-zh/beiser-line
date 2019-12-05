/*
 * Author ddwei
 * LastAuthor ddwei
 * since 2019-12-05 11:33:26 +0800
 * lastTime 2019-12-05 14:13:26 +0800
 * message 贝塞尔工具类
 */
export default class Besizer {
    constructor(context,pointArr) {
        this.context = context
        this.pointArr = pointArr
        this.tempPointsArr = []
        this.lastPoint = {}
        this.llastPoint = {}
        this.currentPoint = {}
    }
    /**
     * description 二次贝塞尔曲线 
     * param {type} 
     * return 
     */    
    drawBesizerLine() {
        this.tempPointsArr = []
        this.pointArr.forEach(point =>{
            this.tempPointsArr.push(point)
            if(this.tempPointsArr.length === 1) {
                this.lastPoint = Object.assign({},point)
            }else if(this.tempPointsArr.length < 3) {
                this.currentPoint = {
                    x: (this.lastPoint.x + point.x) /2,
                    y:(this.lastPoint.y + point.y) /2 
                }
                let endPoint = {
                    x: (this.lastPoint.x + this.currentPoint.x) / 2,
                    y: (this.lastPoint.y + this.currentPoint.y) /2 
                }
                this.context.moveTo(this.lastPoint.x,this.lastPoint.y)
                this.context.lineTo(this.endPoint.x,this.endPoint.y)
                this.llastPoint = this.lastPoint
                this.lastPoint = this.currentPoint
            }else {
                let beginPoint = {
                    x: (this.lastPoint.x + this.llastPoint.x) /2,
                    y: (this.lastPoint.y + this.llastPoint.y) /2
                }
                this.currentPoint = {
                    x: (this.lastPoint.x + point.x) /2,
                    y: (this.lastPoint.y + point.y) /2
                }
                let endPoint = {
                    x: (this.lastPoint.x + this.currentPoint.x) /2,
                    y: (this.lastPoint.x + this.currentPoint.y) /2
                }
                this.drawBesizerPoint(beginPoint,this.currentPoint,endPoint,this.context)
                this.llastPoint = this.lastPoint
                this.lastPoint = this.currentPoint
            }
        })
    }
    drawBesizerPoint(beginPoint,controlPoint,endPoint,context) {
        context.beginPath()
        context.moveTo(beginPoint.x,beginPoint.y)
        context.quadraticCurveTo(controlPoint.x,controlPoint.y,endPoint.x,endPoint.y)
        context.stroke()
        context.closePath()
    }
    
}