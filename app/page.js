export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="popup" class="popup">
        <div class="popup-content">
          <span class="close" id="closeBtn">
            &times;
          </span>
          <div id="config">
            <p>x,y coordinates represent the top left corner of the drawn node.</p>
            <textarea id="nodeInput" placeholder="Enter nodes as id,x,y,width,height; ...">
              200,100,100,100; 300,100,100,100; 200,200,100,100; 300,200,100,100; 400,200,100,100; 500,200,100,100;
              600,200,100,100; 600,400,100,100
            </textarea>
            <p>
              Two coordinate pairs represent two connected nodes. Enter edges (x1, y1) (x2, y2); (x3, y3) (x4, y4); ..
            </p>
            <textarea id="edgeInput" placeholder="Enter edges (x1, y1) (x2, y2); (x3, y3) (x4, y4); ...  ">
              (600, 200) (200,100); (600, 200) (200,200)
            </textarea>
            <div style="display: flex; gap: 4px">
              <button id="updateButton" style="padding: 5px">
                Update Graph
              </button>
              <button id="cellButton" style="padding: 5px">
                Get Cell
              </button>
              <button id="findPathBtn" style="padding: 5px">
                Find Path
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
