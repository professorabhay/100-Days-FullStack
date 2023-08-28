// GSAP is js lib which is use to add amazing animation in simple line of code. 
// Have to import it in index.Html => https://cdnjs.com/libraries/gsap

// We can use gsap.to gsap.from

// gsap.to("id class element",{
//     properties like css and like object
//     backgroundColor: "red",
//     duration:2
// }) 

// to = original se jo value di hae bo hpo jye gi 
// above original color se red ho jye ga 

// gsap.from("id class element",{
//     properties like css and like object
//     backgroundColor: "red",
//     duration:2
// }) 

// from = jo value di hae ussse orginial ho jye gi
// above red se original ho jye gi

// Can write funciton Aalso

// gsap.to("id class element",{
//     onStart:function(){
//         $('id class element').textillate({in:{effect: 'fadeInUp', callback: function(){
//             $('id class element').textillate('out')
//         }}, out:{effect: 'fadeOutUp'}}) //this is from textillate.js inport cdn's [animate.js cdn from codepen]
//     }
// })


// gsap has library names = scroolTrigger - depends on scrolling 