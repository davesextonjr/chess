//find the length of longest level of a binary tree
//the length is mesured from the left most element to the right most element
//count the empty nodes in between the extreme elements

var widthOfBinaryTree = function (root) {

    //Check for a head node
    if (!root) return 0

    //Hold the current maxWidth
    let maxWidth = 0

    //Use a queue for a breadth first traversal
    //Put each node into the queue with an index
    const queue = [[root, 0]]

    while (queue.length) {
        //capture the number of elements of the current level to itterate just through the current level
        let queueLength = queue.length

        //declare variables here for the for loop so we can have access when we leave the loop
        let node
        let index

        //find the index of the the first element
        let leftMostIndex = queue[0][1]

        // adjust the index for the new row to prevent indexes that get too big
        let indexAdjuster = 0 - leftMostIndex
        leftMostIndex += indexAdjuster

        //shift off the elements of the current level and push the next level elements into the queue
        for (let i = 0; i < queueLength; i++) {
            [node, index] = queue.shift()
            if (node.left) queue.push([node.left, (2 * index) + indexAdjuster])
            if (node.right) queue.push([node.right, (2 * index + 1) + indexAdjuster])
        }
        //after going through each level compare the current level w›idth with the max width
        maxWidth = Math.max(maxWidth, index + indexAdjuster - leftMostIndex + 1)
    }
    return maxWidth
};
