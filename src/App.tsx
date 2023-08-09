import SlideShow from './slideshow/slideshow';
import Card from './card/card';
import TopToBottom from './dropdown/animate/TopToBottom';

// Generate drop down items.
const dropDownItems: JSX.Element[] = [];

Array.from({ length: 10 }, (_, index) => {
    dropDownItems.push(<>Item Number {index.toString()}</>)
})

function App() {
  return (
    <main>
        <div className="content-item">
            <h1>Drop Down Examples</h1>
            <div className="flex flex-wrap gap-4">
                <TopToBottom
                    title={<>Drop Down Click #1</>}
                    items={dropDownItems}
                />
                <TopToBottom
                    title={<>Drop Down Click #2</>}
                    items={dropDownItems}
                />
                <TopToBottom
                    title={<>Drop Down Hover #1</>}
                    items={dropDownItems}
                    hover={true}
                />
                <TopToBottom
                    title={<>Drop Down Hover #2</>}
                    items={dropDownItems}
                    hover={true}
                />
            </div>
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
