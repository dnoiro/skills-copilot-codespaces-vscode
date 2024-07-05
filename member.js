function skillsMember() {
  // skills
  const skills = document.querySelector('.skills');
  if (skills) {
    const skillsItems = document.querySelectorAll('.skills__item');
    const skillsItemsArr = Array.from(skillsItems);
    const skillsItemsArrSorted = skillsItemsArr.sort(function(a, b) {
      return b.querySelector('.skills__item-value').innerText - a.querySelector('.skills__item-value').innerText;
    });

    skillsItemsArrSorted.forEach(function(item) {
      skills.appendChild(item);
    });
  }
}