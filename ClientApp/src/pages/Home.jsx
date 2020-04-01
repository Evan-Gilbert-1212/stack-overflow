import React, { useState, useEffect } from 'react'
import './home.scss'
import axios from 'axios'

export function Home() {
  return (
    <>
      <div className="home-page">
        <div className="home-top-left">
          <h2 className="home-top-h1">Top Questions</h2>
        </div>
        <div className="home-top-right">
          <button className="home-ask-questions">Ask Questions</button>
        </div>
      </div>
      <div className="home-sort-buttons">
        <button>Interesting</button>
        <button>Bountied</button>
        <button>Hot</button>
        <button>Week</button>
        <button>Month</button>
      </div>
      <hr />
      <div className="home-question-wrapper">
        <div className="vote-box">
          <p>1</p>
          <p>votes</p>
        </div>
        <div className="vote-answer">
          <p>46</p>
          <p>answer</p>
        </div>
        <div className="vote-views">
          <p>0</p>
          <p>views</p>
        </div>
        <div className="question-area">
          <div className="question-area-top">
            <div className="bounty">+50</div>
            <p className="question-summary">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letra
            </p>
          </div>
          <div className="question-area-bottom">
            <div className="tags">
              <div>openmp</div>
              <div>llvm</div>
              <div>llvm-clang</div>
            </div>
            <div className="contributor">
              <p>answered 10 hours ago Karthik Sriram 1</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="question-summary narrow" id="question-summary-60693395">
        <div
          onclick="window.location.href='/questions/60693395/django-settings-for-tests-of-a-reusable-app'"
          class="cp"
        >
          <div class="votes">
            <div class="mini-counts">
              <span title="5 votes">5</span>
            </div>
            <div>votes</div>
          </div>

          <div class="status answered">
            <div class="mini-counts">
              <span title="3 answers">3</span>
            </div>
            <div>answers</div>
          </div>

          <div class="views">
            <div class="mini-counts">
              <span title="70 views">70</span>
            </div>
            <div>views</div>
          </div>
        </div>
        <div class="summary">
          <div
            class="bounty-indicator"
            title="this question has an open bounty worth 50 reputation"
          >
            +50
          </div>
          <h3>
            <a
              href="/questions/60693395/django-settings-for-tests-of-a-reusable-app"
              class="question-hyperlink"
            >
              Django: settings for tests of a reusable app?
            </a>
          </h3>
          <div class="tags t-django t-pycharm t-environment-variables t-django-testing">
            <a
              href="/questions/tagged/django"
              class="post-tag"
              title="show questions tagged &#39;django&#39;"
              rel="tag"
            >
              django
            </a>{' '}
            <a
              href="/questions/tagged/pycharm"
              class="post-tag"
              title="show questions tagged &#39;pycharm&#39;"
              rel="tag"
            >
              pycharm
            </a>{' '}
            <a
              href="/questions/tagged/environment-variables"
              class="post-tag"
              title="show questions tagged &#39;environment-variables&#39;"
              rel="tag"
            >
              environment-variables
            </a>{' '}
            <a
              href="/questions/tagged/django-testing"
              class="post-tag"
              title="show questions tagged &#39;django-testing&#39;"
              rel="tag"
            >
              django-testing
            </a>
          </div>
          <div class="started">
            <a
              href="/questions/60693395/django-settings-for-tests-of-a-reusable-app/?lastactivity"
              class="started-link"
            >
              answered{' '}
              <span title="2020-03-31 08:01:21Z" class="relativetime">
                11 hours ago
              </span>
            </a>
            <a href="/users/1714030/daniel-backman">Daniel Backman</a>{' '}
            <span class="reputation-score" title="reputation score " dir="ltr">
              3,831
            </span>
          </div>
        </div>
      </div> */}
    </>
  )
}
