function processTrackedEvent() {
  // some blocking operation
  JSON.stringify(Array.from({ length: 2000000 }, () => ({ a: 3 })));
}

document.querySelectorAll('a')
  .forEach((anchor) => {
    anchor.addEventListener('click', async () => {
      processTrackedEvent();
      console.log('Acme tracker >> data collected!');
    });
  });

processTrackedEvent();
console.log('Acme tracker is loaded!');
