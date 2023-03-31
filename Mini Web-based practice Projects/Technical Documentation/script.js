const menuItems = document.querySelectorAll('.menu li');
      const contentDiv = document.querySelector('.content');

      const topicContent = {
        Deep_learning: '<h2>Deep learning</h2><p>The ability to successfully train convolutional neural networks has most benefited the field of computer vision, with applications such as object recognition, video labeling, activity recognition, and several variants thereof. Deep learning is also making significant inroads into other areas of perception, such as audio, speech, and natural language processing.</p>',
        Reinforcement_learning: '<h2>Reinforcement learning</h2><p>Whereas traditional machine learning has mostly focused on pattern mining, reinforcement learning shifts the focus to decision making, and is a technology that will help AI to advance more deeply into the realm of learning about and executing actions in the real world. It has existed for several decades as a framework for experience-driven sequential decision-making, but the methods have not found great success in practice, mainly owing to issues of representation and scaling.</p>',
        Robotics: '<h2>Robotics</h2><p>Robotic navigation, at least in static environments, is largely solved. Current efforts consider how to train a robot to interact with the world around it in generalizable and predictable ways. A natural requirement that arises in interactive environments is manipulation, another topic of current interest. The deep learning revolution is only beginning to influence robotics, in large part because it is far more difficult to acquire the large labeled data sets that have driven other learning-based areas of AI.</p>',
        Computer_vision: '<h2>Computer vision</h2><p>Computer vision is currently the most prominent form of machine perception. It has been the sub-area of AI most transformed by the rise of deep learning. Until just a few years ago, support vector machines were the method of choice for most visual classification tasks. But the confluence of large-scale computing, especially on GPUs, the availability of large datasets, especially via the internet, and refinements of neural network algorithms has led to dramatic improvements in performance on benchmark tasks.</p>',
        machine_learning: '<h2>Large-scale machine learning</h2><p>Many of the basic problems in machine learning (such as supervised and unsupervised learning) are well-understood. A major focus of current efforts is to scale existing algorithms to work with extremely large data sets. For example, whereas traditional methods could afford to make several passes over the data set, modern ones are designed to make only a single pass; in some cases, only sublinear methods (those that only look at a fraction of the data) can be admitted.</p>',
      };

      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          const topicId = item.id;
          contentDiv.innerHTML = topicContent[topicId];
        });
      });