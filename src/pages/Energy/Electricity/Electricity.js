import "./electricity.css";

const Electricity = () => {
    const handleSave = () =>{
        
    }
    return (
        <div id="electricity">
            <div className="container">
                <p className="electricityContent">Here you can enter your monthly electricity bills every month and can compare present bill with previous month's bill, so that you can know how much you saved or wasted money compared to last month's bill.</p>
            </div>
            <div class="card my-5 elecCard">
                <div class="card-body">
                    <form action="">
                        <label htmlFor="" className="form-label">New Electricity Bill :</label>
                        <input type="text" className="form-control" placeholder = "Enter new electricity bill" />
                        <button type="submit" class="btn btn-primary mt-2 py-1" onClick = {handleSave}>Save</button>
                    </form>
                </div>
            </div>
            <div className="container">
            <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                  <hr></hr>
                  <ul>
                    <li><p className="electricityContent">Install solar panels : If you install solar panels at your home and remain connected to the electrical grid, you can be your own power plant and contribute to the grid. Any excess energy is exported from your home to the electric grid, reducing the need for electricity produced by your utility and cutting down on pollution from your local power plant.</p></li>
                    <li><p className="electricityContent">Wall Paint : Painting walls in light colors allow them to reflect the existing natural light, thus reducing the need for artificial lighting. Make the most of the sunlight, whenever possible. You will not only save energy but improve your mood.</p></li>
                    <li><p className="electricityContent">Energy-efficient appliances : When the time comes to replace your appliances, consider buying more modern ones, with more energy-efficient systems.</p></li>
                    <li><p className="electricityContent">More use of ceiling fans : Air conditioner units are among the top energy consumers of any household. By installing ceiling fans, or using the ones you have can help circulate air throughout your home. This will ease the job of your air conditioner.</p></li>
                    <li><p className="electricityContent">Use LED Lights : LED lights can reduce your lighting energy consumption by 90 percent. This can save you quite a bit of money long-term! Traditional incandescent light bulbs consume an excessive amount of electricity and must be replaced more often than their energy-efficient alternatives.</p></li>
                </ul>
            <h4 style={{color: "red", fontFamily: "monospace"}}>Impacts</h4>
            <hr></hr>
                <ul>
                <li><p className="electricityContent">Emissions of greenhouse gases and other air pollutants, especially when a fuel is burned.</p></li>
                <li><p className="electricityContent">Use of water resources to produce steam, provide cooling, and serve other functions.</p></li>
                <li><p className="electricityContent">Discharges of pollution into water bodies, including thermal pollution (water that is hotter than the original temperature of the water body).</p></li>
                <li><p className="electricityContent">Generation of solid waste, which may include hazardous waste.</p></li>
                <li><p className="electricityContent">Effects on plants, animals, and ecosystems that result from the air, water, waste, and land impacts above.</p></li>
            </ul>
            </div>
        </div>
    );
}

export default Electricity;