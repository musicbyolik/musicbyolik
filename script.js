const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


/*// JavaScript to handle tab switching and trigger the animation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const tabsContainer = document.querySelector('.tabs-container');

let activeTabIndex = 3; // Index of the initially active tab (Startseite)

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove the active class from all tab buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add the active class to the clicked tab button
    button.classList.add('active');

    // Get the target tab content ID from the data-tab-target attribute
    const targetTabId = button.getAttribute('data-tab-target');

    // Find the index of the clicked tab
    const targetTabIndex = Array.from(tabButtons).indexOf(button);

    // Calculate the translation value based on the index difference
    const translationValue = targetTabIndex - activeTabIndex;

    // Update the activeTabIndex
    activeTabIndex = targetTabIndex;

    // Set the transform translation for tab contents to trigger the animation
    tabContents.forEach((content) => {
      content.style.transform = `translateX(${(content.id === targetTabId ? 0 : translationValue * 100)}%)`;
    });
  });
});

*/

/*
// JavaScript to handle tab switching and trigger the animation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the active class from all tab buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Add the active class to the clicked tab button
    button.classList.add('active');

    // Get the target tab content ID from the data-tab-target attribute
    const targetTabId = button.getAttribute('data-tab-target');

    // Hide all tab contents except the active one
    tabContents.forEach((content) => {
      if (content.id === targetTabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});*/
