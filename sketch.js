// let video;
// let poseNet;
// let pose;
// let skeleton;
<<<<<<< Updated upstream

// let brain;

// let state = 'waiting';
// let targetLabel; // Fixed typo here

=======
// let brain;
// let state = 'waiting';
// let targetLabel; // Fixed typo here


>>>>>>> Stashed changes
// function keyPressed() {
//     if (key == 's') {
//         brain.saveData();
//     } else {
//         targetLabel = key;
//         console.log(targetLabel);
//         setTimeout(function() {
//             console.log('collecting');
//             state = 'collecting';
//             setTimeout(function() {
//                 console.log('not collecting');
//                 state = 'waiting';
//             }, 2000);
//         }, 2000);
//     }
// }

// function setup() {
//     createCanvas(1000, 800);
<<<<<<< Updated upstream
//     video = createVideo(['baddi_mine.mp4']);
//     video.play();
//     //video.hide();
=======
//     video = createVideo(['baddi.mp4']);
//     video.hide();
//     video.play();
>>>>>>> Stashed changes
//     poseNet = ml5.poseNet(video, modelLoaded);
//     poseNet.on('pose', gotPoses);

//     let options = {
//         inputs: 34,
//         outputs: 4,
//         task: 'classification',
//         debug: true
//     }
//     brain = ml5.neuralNetwork(options);
// }




<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
// function gotPoses(poses) {
//     if (poses.length > 0) {
//         pose = poses[0].pose;
//         skeleton = poses[0].skeleton;
//         if (state == 'collecting') {
//             let inputs = [];
//             for (let i = 0; i < pose.keypoints.length; i++) {
//                 let x = pose.keypoints[i].position.x;
//                 let y = pose.keypoints[i].position.y;
//                 inputs.push(x);
//                 inputs.push(y);
//             }
//             let target = [targetLabel];
//             brain.addData(inputs, target);
//         }
//     }
// }

// function modelLoaded() {
//     console.log('poseNet ready');
// }




// function draw() {
//    translate(video.width, 0);
//     scale(-1, 1);
<<<<<<< Updated upstream
//     background(220);
=======
>>>>>>> Stashed changes
//     image(video, 0, 0, video.width, video.height);

//     if (pose) {
//         for (let i = 0; i < skeleton.length; i++) {
//             let a = skeleton[i][0];
//             let b = skeleton[i][1];
//             strokeWeight(2);
//             stroke(0);
//             line(a.position.x, a.position.y, b.position.x, b.position.y);
//         }
//         for (let i = 0; i < pose.keypoints.length; i++) {
//             let x = pose.keypoints[i].position.x;
//             let y = pose.keypoints[i].position.y;
//             fill(0);
//             stroke(255);
//             ellipse(x, y, 16, 16);
//         }
//     }
// }



<<<<<<< Updated upstream
//CODE WRITTEN BY GPT
=======



>>>>>>> Stashed changes

let video;
let poseNet;
let pose;
let skeleton;

let brain;

let state = 'waiting';
let targetLabel;

function startVideo() {
    video.play();
}

function keyPressed() {
    if (key == 's') {
        brain.saveData();
    } else {
        targetLabel = key;
        console.log(targetLabel);
        setTimeout(function() {
            console.log('collecting');
            state = 'collecting';
            setTimeout(function() {
                console.log('not collecting');
                state = 'waiting';
            }, 2000);
        }, 1000);
    }
}

function setup() {
<<<<<<< Updated upstream
    createCanvas(1000, 800);
    video = createVideo(['baddi_mine.mp4']);
=======
    createCanvas(1300, 900);
    video = createVideo(['train_vid.mp4']);
>>>>>>> Stashed changes
    // video.play(); // Removed from setup
    //video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    let options = {
        inputs: 34,
        outputs: 4,
        task: 'classification',
        debug: true
    }
    brain = ml5.neuralNetwork(options);
}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
        if (state == 'collecting') {
            let inputs = [];
            for (let i = 0; i < pose.keypoints.length; i++) {
                let x = pose.keypoints[i].position.x;
                let y = pose.keypoints[i].position.y;
                inputs.push(x);
                inputs.push(y);
            }
            let target = [targetLabel];
            brain.addData(inputs, target);
        }
    }
}

function modelLoaded() {
    console.log('poseNet ready');
}

function draw() {
    // translate(video.width, 0);
    // scale(-1, 1);
    background(220);
    image(video, 0, 0, video.width, video.height);

    if (pose) {
        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(2);
            stroke(0);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
        for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0);
            stroke(255);
            ellipse(x, y, 16, 16);
        }
    }
<<<<<<< Updated upstream
}

=======
}
>>>>>>> Stashed changes
