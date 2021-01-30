---
title: 'Ensemble Learning Methods in Machine Learning'
tags: ["machine learning"]
published: true
date: '2021-01-30'
---


Ensemble learning is a compelling technique that helps machine learning systems
improve their performance. The technique gained a lot of popularity in the
online data science competition platform Kaggle with a good number of winning
solutions using ensembling methods. It uses a group of models to predict rather
than just using one model. It’s kind of like how you look at reviews before you
buy something. You read the reviews, weigh how many people like the product vs.
how many people don’t, and decide ultimately whether the product is worth your
money, right? That’s exactly what ensemble learning does. Here’s a more formal
definition from Wikipedia,

> “In statistics and machine learning, **ensemble methods** use multiple learning
> algorithms to obtain better predictive performance than could be obtained from
any of the constituent learning algorithms alone”

Let’s talk about a fun experiment to understand the intuition better.

![](https://cdn-images-1.medium.com/max/720/0*t7q7VrXL7wnzDFU-)

Prof. Marcus du Sautoy decided to conduct the famous jelly bean experiment. He
took a jar of jelly beans and asked 160 people to guess how many jelly beans
were in the jar and recorded their answers. He had answers ranging from 400 to
up to 50,000. He then took the average of those values and compared them to the
actual number of jelly beans. The total number of beans in the jar was 4510 and
the average guess of the participants was 4514. That was incredibly close,
right? This is called “**wisdom of the crowd”. **That is if you ask enough
people, there will be an equal number of people who overestimate it and
underestimate it. So, in sense, they will tally each other out.

> The wisdom of the crowd is the collective opinion of a group of individuals
> rather than that of a single expert*.*

Machine learning uses this idea to build an “ensemble” of models to make more
accurate predictions. The idea is that the errors made by one model will be
corrected by another. Combining **weak learners** (our base model) to make one
**strong ensemble*** model*. **They can be individually wrong, but together they
will be right.**

![](https://cdn-images-1.medium.com/max/960/1*w1VK8BUisGByZhFNfnJBxw.gif)

In its simplest method of implementation, you can arrange your models parallelly
and use:

* **Hard Votes** **for classification**:

It’s your classic voting system. Implement a range for classifier models like
SVM, logistic regression, decision trees, etc all trained to predict your data.
Aggregate their answers and choose the value that has the majority of votes.

* **Averaging for regression**:

Implement regression models and average the value of their outputs. Now if you
want one of your models to have more say, you can use a weighted average.

![](https://cdn-images-1.medium.com/max/960/0*NsdkQ7pmKx5K2Fn8)

However, machine learning problems are usually more complex and have a large
volume of data. We have to be more careful about details here. There are 4
techniques used to implement ensemble models:

#### **BAGGING:**

![](https://cdn-images-1.medium.com/max/960/1*OYUcalZ95e3A97tUdpOIuA.gif)

The term bagging comes from “bootstrap aggregating” where we feed each model,
arranged **parallelly** in our ensemble a randomized subset of size N from the
original data with **replacement**. The idea is to use the same type model in an
ensemble but provide them a randomized subset of the original data. Here’s how
to create a bootstrapped dataset.

1. Randomly pick a sample from the original subset

2. Copy this sample into the bootstrapped dataset we want

3. Continue the step 1 and 2 till we have N samples, the same size as the
original dataset in our bootstrap dataset

Since we randomly pick and copy the sample into the bootstrap sample, there’s a
high possibility that we will randomly pick the same sample twice. This is
completely fine and we allow it. This helps create diverse subsets of the
original data, which naturally introduces a **higher bias** in the prediction.
Each model will receive a bootstrapped dataset. The model will then make the
final prediction by aggregating the predictions of the models (high votes or
averaging).

![](https://cdn-images-1.medium.com/max/960/0*ITq6S1tyaVhN5SUl)

Random forest is a good example of bagging. Random forest is an ensemble model
of decision trees. Decision trees are prone to overfitting, but by introducing
bagging we help introduce a higher bias to strike the bias-variance trade-off
that we need.

#### **BOOSTING:**

In boosting the arrangement of the models are sequential and not parallel. Where
once a weak learner makes a prediction, it is tested. The errors made by this
model are then rectified by the next model. Then the errors made by this model
and corrected by the next and so on, **boosting** each model.

![](https://cdn-images-1.medium.com/max/960/0*A9uWkRCiw0XU_r0m)

Think of it this way, each model that we use may be great at one part of the
problem, but not the other. **So each model tries to rectify the mistake of the
previous model.** This way we are sure that our ensemble model has predictors
that capture all parts of the problem so we can confidently take an aggregate of
their predictions to make the final predictions. Boosting algorithms try to
increase the variance of the model. Adaboost, Gradient boost, and xgboost and
good examples of boosting algorithms.

#### **BLENDING:**

In blending, once outputs of the weak learners are used to create a new dataset.
We will then use another model (second level model or meta learner) on this
dataset to give out final predictions. To put it in simpler words, we use a
model instead of the usual aggregation that we do to get our final outputs.

![](https://cdn-images-1.medium.com/max/960/0*2mjz1-WUlYO49Qhp)

#### **Here’s how its implemented step by step:**

**Step 1:** First split our original dataset into a training set, validation set
(held-out set), and test set.

**Step 2: **Pass the training set into our first level models that we choose and
train them.

**Step 3:** Once we have our learned models, pass the validation set to these
trained models, and get the outputs predicted by each model in the first level.
We do this so we can ensure that our model predicts data it hasn’t seen before.

**Step 4:** Create a dataset using the predictions by models at the first level.
So if you have an m*n validation set and M number of models, you will have a new
dataset of matrix size m*M

**Step 5:** Pass the dataset to the second level model of your choice.

**Step 6:** Output of this model are the final predictions.

**Step 7: **Test your model using the test set! You can try out a different
second-level model to see what works best!

#### **STACKING:**

Some people use the word stacking and blending interchangeably, and they are
pretty similar. Except that we split the training data into k-fold sets and
train the model. We later use the trained model to make predictions on the
entire training data set.

#### The step by step break down goes like this:

**Step 1:** Split the train set in k-folds, say k = 2. So, 2 parts: train_a and
train_b.

**Step 2: **Fit first-level models on train_a and create predictions for
train_b. Then fit first-level models train_b and create predictions for train_a.

**Step 3:** Finally fit the model on the entire train set and create predictions
for the test set.

**Step 4:** Create a dataset using the predictions by models in the first level
in the test set. So if you have an m*n test set and M number of models, you will
have a new dataset of matrix size m*M

**Step 5:** Pass the dataset to the second level model of your choice.

**Step 6:** Output of this model are the final predictions.

**Step 7: **Test your model using the test set! You can try out a different
second-level model to see what works best!

So that’s ensemble learning! To conclude we saw an overview of 4 simple yet
powerful techniques ensemble models use. Ensemble models work their best when
their base models are varied. Just remember that the good solutions are often
simple, great solutions have a little complexity. As long as you don’t over
complicate your ensemble model, you’re good. I will be doing a code
implementation of these techniques, so stay tuned!

#### Source:

* [Ensemble methods: bagging, boosting and
stacking](https://towardsdatascience.com/ensemble-methods-bagging-boosting-and-stacking-c9214a10a205)
* [Stacking classifier](https://www.youtube.com/watch?v=sBrQnqwMpvA&t=449s)
* E[nsemble-learning-5-main-approaches](https://www.kdnuggets.com/2019/01/ensemble-learning-5-main-approaches.html)
* [kaggle-ensembling-guide](https://mlwave.com/kaggle-ensembling-guide/)
