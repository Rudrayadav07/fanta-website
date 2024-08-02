var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: 3,
    // markers: true,
}})
tl.to("#fanta",{
    top: "115%",
    left: "2%"
}, 'orange')
tl.to("#orange-cut",{
    top: "155%",
    left: "23%"
},'orange')
tl.to("#oranges",{
    width:"15%",
    top:"170%",
    left:'70%',
},"orange")


var tll = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "60% 50%",
    scrub: 3,
    // markers: true,
}})

tll.from("#sprite",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tll.from("#pepsi",{
    rotate: "-90deg",
    
   
    top: "110%"
}, 'ca')



tll.to("#fanta",{
    width:"32%",
    top: "222%",
    left: "34%"
}, 'orange')
tll.to("#orange-cut",{
    top: "210%",
    left: "42.5%"
},'orange')