var train = true;

function setup() {
	
	
	createCanvas(500, 500);
    background(100,500,600);
	
	nn = new RedeNeural(2, 3, 1);

    // XOR Problem
    dataset = {
        inputs:
            [[1, 1],
            [1, 0],
            [0, 1],
            [0, 0]],
        outputs:
            [[0],
            [1],
            [1],
            [0]]
    }
	
	
	
 }

function draw() {
	
	if (train) {
        for (var i = 0; i < 10000; i++) {
            var index = floor(random(4));
            nn.train(dataset.inputs[index], dataset.outputs[index]);
        }
		
		
        if (nn.predict([0, 0])[0] < 0.02 && nn.predict([1, 0])[0] > 0.99) {
            train = false;
            console.log("terminou");
			return("terminou");
        }
    }
	
}