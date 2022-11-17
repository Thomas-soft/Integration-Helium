const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

window.addEventListener("mousemove", (e) =>
{
    r1.style.left = e.pageX+'px';
    r1.style.top = e.pageY+'px';
    setTimeout(() =>
    {
        r2.style.left = e.pageX+'px';
        r2.style.top = e.pageY+'px';
    }, 50);
    setTimeout(() =>
    {
        r3.style.left = e.pageX+'px';
        r3.style.top = e.pageY+'px';
    }, 80);
});

// const rs = document.querySelectorAll(".r");

// window.addEventListener("mousemove", (e) =>
// {
//     rs.forEach((r) => {
//         r.style.left = e.pageX+'px';
//         r.style.top = e.pageY+'px';
//         // console.log(r);
//     });
// });