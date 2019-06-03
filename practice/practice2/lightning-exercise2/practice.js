const blogContainer= document.querySelector(".blogPosts");
    console.log(blogContainer);
    blogContainer.classList.add("currentBlog");
const myArticles= document.querySelectorAll(".blogArticle");
    console.log(myArticles);
for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add("currentBlog")
}
/*How are they different? Try adding an additional class of "currentBlog" to the elements using `classList.add`. Does it work? Why or 
why not? If not, what do you need to do to meet the requirement of adding a class?*/

const lunchString = "lunch, peanut butter and jelly, whole wheat, grape juice, and apple.";
const lunchObject = {
    meal: "lunch",
    sandwich: "peanut butter and jelly",
    bread: "whole wheat",
    drink: "grape juice",
    apple: true,
}
const lunchArray = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice", "apple"]

"Hi. My name is" + name + ", and I'm" + age + "years old. They say that makes me a" + generationStereotype +". In" + timeSpan + " years I'll be" + futureAge + "! I guess that means I'll be a" + dadJoke + " then. Ha ha!"

