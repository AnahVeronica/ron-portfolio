---
title: 'Types of Distance Metrics
and Using User Defined
Distance metrics in Scikit’s
KNN Algorithm:'
tags: ["distance metrics"]
published: true
date: '2020-01-06'
---


### Types of Distance Metrics and Using User Defined Distance metrics in Scikit’s
KNN Algorithm:

![](https://cdn-images-1.medium.com/max/960/1*_DOTmuIGzo7WWFEPCsncAg.jpeg)

KNN algorithm is one of the most commonly used and important algorithms in data
science. It is a **supervised classification **algorithm, meaning that the data
we feed into the algorithm is labeled and we use them to classify the data based
on their similarities. The algorithm works by first measuring the distance of
each point to **k nearest points** and assigns the label of the closest point.
It is used for classifying images, species, etc.

The most important part of a KNN algorithm is the distance metric it uses.
Thankfully scikit allows us to tweak this part. There are so many distance
metrics, so let’s discuss five widely used ones.

> Skip to the last part if you want to **implement your own distance metric
> **straight away!

### Distance Metrics:

Before we begin discussing distance metrics, let’s set some ground rules for a
valid distance function. The conditions that a distance function must satisfy
are

* **Non-negativity**: d(x, y) >= 0. The distance must always be greater than 0.
* **Identity**: d(x, y) = 0 if and only if x == y.
* **Symmetry**: d(x, y) = d(y, x).
* **Triangle Inequality**: d(x, y) + d(y, z) >= d(x, z).

Alright, now let’s discuss the distance metrics.

#### 1. Minkowski Distance:

Minkowski distance is used to measure distance in normed vector space. What this
means is that we can represent a data point as a vector in space whose length
can be calculated. The norm of a vector is simply the length of that vector.

The norm ||x|| of a vector x must satisfy these conditions:

1. The length of a **zero vector** is zero.

2. The scalar factor (positive) multiplied to a vector, only changes magnitude
but not its direction.

3. Maintains Triangle Inequality.

**Here’s the Formula:**

![](https://cdn-images-1.medium.com/max/960/1*y8DBZmfab1IjxE62UmcYJw.png)
<span class="figcaption_hack">The formula of Minkowski distance</span>

When p = 1, the formula gives **Manhattan distance:**

![](https://cdn-images-1.medium.com/max/960/1*HR5x_37NAZspL5S9FWDNUg.png)

Distance is using an **absolute sum of the difference.**

When p = 2, it gives the **Euclidean distance:**

![](https://cdn-images-1.medium.com/max/960/1*o5aNV-pZBWGa60iVpb188Q.png)

This formula is based on the Pythagorean theorem.

When p = ∞, we get the **Chebyshev distance:**

![](https://cdn-images-1.medium.com/max/960/1*qDa50u9MpoKkY1EWKWPRVg.png)

**Note:*** When using these distance metrics, it’s very important to
***normalize*** as this distance measure is sensitive to extreme differences in
a single attribute*

#### 2. Hamming Distance:

Hamming distance gives us the similarity between two binary strings. For example

11011001 ⊕ 10011101 = 01000100

Hamming distance, d(11011001, 10011101) = 2.

The lowest hamming distance represents the closest value. Hamming distance is
particularly useful for measuring data strings. We can use this on **categorical
data** and see if two strings are equal, i.e. to see is “Hamming” and “Hanning”
are the same.

A simple way to do this is by setting the formula = **| x — y |⁰. **So, when the
difference is 0, the value will be 0 meaning that they are similar. Any other
number raised to 0 is 1, so a value of 1 means that they are not the same.

#### 3. Canberra Distance:

The Canberra metric is similar to the Manhattan distance. The distinction is
that the absolute difference between the variables of the two objects is divided
by the sum of the absolute variable values before summing. It is a weighted
version of Manhattan distance. It is very sensitive to changes near zero. This
characteristic becomes useful when we are dealing with data that is in higher
dimensional space with a large number of variables.

![](https://cdn-images-1.medium.com/max/960/1*Q719DDOg0rn3c8uY6VeDHw.png)

#### 4. Jaccard Distance:

Imagine two data points as two sets and you want to measure how similar they
are. A good choice of metric in the Jaccard distance. It measures the number of
common elements in the two sets to all the elements in the two sets. More number
of common elements means that both objects should be similar. The higher the
score, the more similar two data points are.

![](https://cdn-images-1.medium.com/max/960/1*Yovw5m6wIGAA_G3zZlD4Sw.png)

Some of the use cases of this metric are identifying plagiarism, the similarity
between documents, etc.

#### 5. Cosine Similarity and Distance:

Cosine similarity attempts to measure the similarity of the two vectors by
measuring the cosine between the two vectors. Cosine gives the ratio of the
adjacent and hypotenuse. When angle = 0, Cosine = 1. When the angle between two
vectors is 0, the lie on top of each other. When the value = 1, it means that
the two vectors are similar. Lower value means that they have a lower
similarity.

![](https://cdn-images-1.medium.com/max/960/1*qM1kF4elK87YsdXJ0Qw9iw.png)

**Cosine distance = 1 — cosine similarity. **We can use the above formula to
calculate the distance.

> **For most use cases, this should cover you. But when should you use which
> metric?**

Well, there is no one particular distance metric that works in all cases or one
distance metric that works all the time for a particular problem. It’s all about
trial and error. So, use what works best for you!

Here’s is a beautiful [paper](https://arxiv.org/pdf/1708.04321.pdf) that
explores different distance metrics on datasets and compares them.

### Custom User Defined Distance Metric with Scikit’s KNN Algorithm:

Scikit already allows you to choose from a range of distance metrics. Refer to
this
[page](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.DistanceMetric.html)
to see if the metric you want to use is available. But if at all you need to use
a distance metric not listed in the link above, here’s how you do it:

#### Step 1: Define the function:

I’ve decided to implement the Hassant distance from the paper I’ve mentioned
above. The function must return the distance score for each pair of vectors
passed to it.


#### Step 2: Pass the function name in the metric parameter to your model
constructor:

I’m using KNeighborsClassifier from sklearn.neighbours. I pulled the music
dataset off kaggle. The goal is to correctly classify the music genre based on
its properties.

    import pandas as pd
    import numpy as np
    from sklearn.model_selection import train_test_split
    from sklearn.neighbors import KNeighborsClassifier, NearestNeighbors
    from sklearn.metrics import accuracy_score, classification_report

    #Read the data in
    music_data = pd.read_csv("..\Datasets\Tmusic_data.csv")

    #Specify the target
    X = music_data.drop("class", axis = 1)
    Y = music_data["class"]

    #Split the data into train and test sets
    Xtrain, Xtest, y_train, y_test = train_test_split(X, Y, random_state = 0, train_size = 0.7)

    #Standardize the data 
    scaler = preprocessing.StandardScaler().fit(Xtrain)
    Xtrain = scaler.transform(Xtrain)
    Xtest = scaler.transform(Xtest)


    #test
    y_pred = knn.predict(Xtest)

    print(accuracy_score(y_test, y_pred))

    0.75

We get an accuracy of 75%. You can try out different metrics to see if you can
get a better score.

**Note: ***This custom function does not work if we select* the ‘*kd_tree’
algorithm. Otherwise, you’re good.*

<br> 