import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="AI Solution" img="card1.png" text="We offer AI solution in modern architecture - Easily reusable, maintainable and high performance " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="MLOPs service for Data Centric" img="card2.png" text="With data pipeline, model can learn online" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="AI cloud service" img="card3.png" text="With Docker, AWS, we help you to deploy model in cloud service fastly" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
