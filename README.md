## Frontend interview project

### Job applicant
* Emil Rune Møller
* emilrmoeller@gmail.com

### The project
I've chose to make a new component to showcase my knowledge of React and the browsers, but also to show my understanding of working on components for a design system.

Because your product is customers service software I made an textarea that resizes it's height automatically that could be used in eg. chat applications.

### Component: TextareaAutosize
* [TextareaAutosize](./src/components/textarea-autosize)
* [ChatInput](./src/components/chat-input)

### Some things that can be improved
* Adding minimum row count
* Support for `box-sizing: content-box`
* Throttle recalculations
* More tests

### System changes
I had to install `@babel/helper-compilation-targets` to get storybook running.

I changed testEnvironment to 'jsdom' in jest.config.js.

### End
Thanks for taking your time to look at the work.

All the best,
Emil
