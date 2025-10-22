---
title: "Why AI Summarization Is not Solved: Lessons from Legal Case Management"
excerpt: Just tell ChatGPT to summarize it.
coverImage: /media/pexels-eugeniofr-30005297.jpg
date: 2025-10-22T15:18:00.000-04:00
---
This phrase echoes through countless AI strategy meetings, reflecting a dangerous oversimplification. While modern LLMs boast impressive context windows, our recent projects with justice organizations revealed why document summarization remains one of the most challenging AI implementations—and why success requires more than just powerful technology.

We worked with two organizations managing complex legal cases: [Recidiviz](<>), helping parole officers understand client needs, and [Mobile Pathways](<>), assisting immigration lawyers with case preparation. Both faced the same challenge: extracting key insights from hundreds of case notes spanning years of history.

#### The Stakeholder Alignment Problem

Before diving into technical challenges, Mobile Pathways taught us that defining “good summarization” is often the hardest part. Initial requirements expected detailed summaries as paragraphs, but once these were shown to a broader set of subject matter experts, they found them too verbose and hard to read.

**The Real Challenge**: Stakeholders rarely know what they want until they see it. When one stakeholder prioritizes comprehensive coverage, another requests a concise and actionable output. This misalignment isn’t a technical problem—it’s an organizational one that no amount of prompt engineering can solve.

**Our Solution**: Multi-iteration requirement gathering with all stakeholders present. We treated summary definition as an iterative design process, not a one-time specification. This alignment phase took longer than the technical implementation but was critical for adoption.

#### The Context Window Paradox

Counter-intuitively, larger context windows often made our summarization worse, not better. When processing cases with 700+ notes spanning years of legal history for Recidiviz, we encountered two critical problems:

**Lost in the Middle**: Despite fitting all notes within the context window, LLMs consistently missed critical information buried in the middle of long inputs. Ask an LLM “Did this 50,000-token case mention housing issues?” and it might confidently answer “no” while the information sits plainly in token 25,000.

**Non-Deterministic Chaos**: Even with a zero temperature, processing millions of tokens introduced enough variance that identical inputs produced vastly different summaries. This made systematic evaluation very challenging and could lead to eroded user confidence.

The solution wasn’t bigger context windows—it was smarter filtering.

#### The Great Filtering Experiment

We systematically tested different approaches to identify relevant information before summarization for Recidiviz:

###### Scenario 0: Brute Force Failure

Feeding all notes directly to the LLM produced inconsistent, incomplete summaries. The attention mechanism couldn’t effectively prioritize relevant information across hundreds of notes.

###### Scenario 1: BERT Zero-Shot Classification

BERT classification showed improvement but missed nuanced legal contexts. More importantly, fine-tuning costs made this approach commercially unviable compared to generative alternatives.

###### Scenario 2: Embeddings-Based Filtering

Vector similarity matching offered computational efficiency and easy tuning but missed notes with relevant information expressed differently than our category queries.

###### Scenario 3: Sentence-Level LLM Classification

Using Gemini 2.0 Flash to classify individual sentences showed promise but lost crucial context by fragmenting notes. Structured output parsing also introduced errors.

###### Scenario 4: Note-Level Categorization (Winner)

Our final approach used a smaller LLM (Gemini 2.0 Flash) to categorize complete notes, then fed relevant notes to a larger model (Gemini 2.0 Pro) for summarization. This preserved context while reducing noise—achieving 90% summarization accuracy across employment, housing, and rehabilitation categories.

#### Domain Knowledge as Code

Both projects reinforced that legal summarization isn’t just a text processing problem—it’s a knowledge representation challenge:

**Acronym Expansion** (Recidiviz): Legal documents are dense with specialized abbreviations that confuse LLMs. We built lookup dictionaries to expand terms like “DOC” (Department of Corrections) before processing.

**Context Restructuring**: Effective legal summaries aren’t just shorter—they’re restructured around decision-making needs. Parole officers needed different information highlighting than defense attorneys, who needed different focus than the CTO initially specified.

**Iterative Definition**: Summary requirements evolved through stakeholder feedback. What seemed comprehensive to executives felt overwhelming to practitioners who needed actionable insights, not exhaustive coverage.

#### Expert Availability and Evaluation Challenges

Both projects revealed the scarcity of domain expert time for evaluation. At Recidiviz, we spent a full week with experts annotating just six cases. Mobile Pathways faced even tighter constraints—busy lawyers had minimal availability for system evaluation.

**The Mobile Pathways Innovation**: We developed an LLM-as-judge system validated by the lawyer to implement their evaluation criteria. This allowed continuous quality assessment without constantly interrupting legal work.

**The Recidiviz Approach**: We built a comprehensive online evaluation framework combining multiple metrics —hallucination detection, summarization correctness, faithfulness scores, prompt alignment— using both LLM as judge and traditional NLP metrics. These combine into a weighted confidence score that correlates strongly with offline performance while enabling continuous quality monitoring in production.

Both approaches solved the same fundamental problem: how to maintain quality when ground truth is expensive and expert time is scarce.

#### Why This Matters

Our dual-project experience reveals that production-ready AI summarization requires addressing challenges across multiple dimensions:

1. **Systematic Filtering**

   : Context windows alone don’t solve information overload
2. **Domain Integration**

   : Specialized knowledge must be encoded, not just prompted
3. **Stakeholder Alignment**

   : Requirements emerge through iteration, not specification
4. **Expert Scarcity**

   : Evaluation systems must work with limited domain expert availability
5. **Production Observability**

   : High-stakes environments require comprehensive monitoring and robust evaluation.
