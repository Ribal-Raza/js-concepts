## Asynchronous JavaScript

Asynchronous JavaScript refers to the ability of JavaScript to execute code without blocking the main thread. This means that JavaScript can handle multiple tasks simultaneously, improving the responsiveness and user experience of web applications.
Asynchronous JavaScript works by using a technique called the event loop.

**Default JavaScript Behavior**

By default, JavaScript is single-threaded. This means that it can only execute one line of code at a time. If a task takes a long time to complete, such as fetching data from a server or performing a complex calculation, the entire web page will freeze until the task is finished. This can lead to a poor user experience and make it difficult to create responsive applications.

### Event Loop

The event loop is a continuous loop that monitors the main thread's status and handles asynchronous tasks. It repeatedly checks for two main conditions:

1.  **Main Thread Idle:** If the main thread is idle, meaning it is not currently executing any code, the event loop checks for tasks in the callback queue.
2.  **Callback Queue:** The callback queue is a collection of functions waiting to be executed. The event loop removes the first function from the queue and executes it.

**Synchronous vs. Asynchronous Code Execution**

JavaScript supports both synchronous and asynchronous code execution. Synchronous code execution means that the code is executed one line at a time, blocking the main thread until the task is finished. Asynchronous code execution, on the other hand, allows the main thread to continue processing other tasks while the asynchronous operation is pending.

**How Asynchronous JS Code Works in Event Loop**

When asynchronous code is executed, it typically involves a callback function that is invoked once the asynchronous operation completes. The event loop plays a crucial role in managing this asynchronous flow:

1.  **Asynchronous Task Initiation:** The main thread initiates the asynchronous task, such as making a network request or performing a time-consuming calculation.
2.  **Callback Registration:** The asynchronous operation registers a callback function to be executed once the task is finished.
3.  **Main Thread Continuation:** The main thread continues executing other code while the asynchronous task is running.
4.  **Asynchronous Task Completion:** Once the asynchronous task is finished, it triggers the execution of its registered callback function.
5.  **Callback Queue Addition:** The callback function is added to the callback queue, waiting for the event loop to pick it up.
6.  **Event Loop Execution:** The event loop checks for tasks in the callback queue and executes the first function it finds, which is the callback function.
7.  **Callback Function Execution:** The callback function is executed, allowing it to handle the results of the asynchronous task.
