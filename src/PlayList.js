import './PlayList.css';

function PlayList() {
  /* we'll need to figure out how to get data from the backend later */
  let data = [
    {
      "id": 1,
      "title": "Meditation 1",
        "url": "",
    },
    {
      "id": 2,
      "title": "Meditation 2",
        "url": "",
    },
    {
      "id": 3,
      "title": "Meditation 3",
        "url": "",
    },
    {
      "id": 4,
      "title": "Meditation 4",
        "url": "",
    },
  ];

  return (
    <div className="playSideNav">
      <ul>
        <li>Meditation 1</li>
        <li>Meditation 2</li>
        <li>Meditation 3</li>
        <li>Meditation 4</li>
        <li>Meditation 5</li>
        <li>Meditation 6</li>
        <li>Meditation 7</li>
        <li>Meditation 8</li>
        <li>Meditation 9</li>
        <li>Meditation 10</li>
      </ul>
    </div>
  );
}

export default PlayList;
