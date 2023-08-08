import SlideShow from './slideshow/slideshow';
import Card from './card/card';
import TopToBottom from './dropdown/animate/TopToBottom';

function App() {
  return (
    <main>
        <div className="content-item">
            <h1>Drop Down Example</h1>
            <TopToBottom />
        </div>
        <div className="content-item">
            <h1>Slideshow Example</h1>
            <SlideShow
                identifier="ss1"
            >
                {Array.from({ length: 25 }, (_, index) => {
                    return (
                        <Card
                            key={`card-${index.toString()}`}
                            title={`Card #${index.toString()}`}
                            image={`/images/card${index.toString()}.png`}
                        >
                            <p>This is the description of card #{index.toString()}!</p>
                        </Card>
                    );
                })}
            </SlideShow>
        </div>
    </main>
  );
}

export default App;
