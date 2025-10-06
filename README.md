# Latency Visualizer

An interactive tool to **simulate** and **visualize** latency on a UI.

A toggle button switches between images, and the delay between the click and the actual image change can be configured to simulate different UI response times.

## Features

- Supports Light/Dark Theme
- Responsive Design to adapt to Desktop/Tablet/Mobile
- Loading Spinner can be enabled while toggling images

## Implementation

This project uses JavaScript’s [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) to introduce latency.
While setTimeout does not guarantee exact timing, it works well for this purpose because the UI is minimal and not resource-intensive.

## Latency Numbers

- `0.1 second = 100 milliseconds` is about the limit for having the user feel that the system is reacting instantaneously, meaning that no special feedback is necessary except to display the result.

- `1.0 second` is about the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second, but the user does ***lose the feeling of operating directly on the data***.

- `10 seconds` is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they ***should be given feedback*** indicating when the computer expects to be done.


## Reference
- https://ux.stackexchange.com/questions/42684/what-as-a-rule-of-thumb-is-the-maximum-tolerable-time-the-ui-thread-is-blocked
- https://stackoverflow.com/questions/536300/what-is-the-shortest-perceivable-application-response-delay
- https://gist.github.com/jboner/2841832
