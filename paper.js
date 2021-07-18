class paper{
constructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
        
        }
this.x=x
this.y=y
this.width=width
this.height=height



this.image=loadImage("paper.png")
this.paperbody=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.paperbody)

}
display(){
  var posbody=this.paperbody.position
push()
translate(posbody.x,posbody.y)
fill(255)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)
pop()








}




}