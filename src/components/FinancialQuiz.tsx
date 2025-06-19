
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

const FinancialQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How much do you currently have in your emergency fund?",
      options: [
        { text: "No emergency fund", points: 0 },
        { text: "Less than $1,000", points: 1 },
        { text: "$1,000 - $5,000", points: 2 },
        { text: "3-6 months of expenses", points: 3 },
        { text: "More than 6 months of expenses", points: 4 }
      ]
    },
    {
      id: 2,
      question: "What percentage of your income do you save each month?",
      options: [
        { text: "I don't save anything", points: 0 },
        { text: "1-5%", points: 1 },
        { text: "6-10%", points: 2 },
        { text: "11-20%", points: 3 },
        { text: "More than 20%", points: 4 }
      ]
    },
    {
      id: 3,
      question: "How do you typically track your spending?",
      options: [
        { text: "I don't track it", points: 0 },
        { text: "I check my bank balance occasionally", points: 1 },
        { text: "I use mobile banking apps", points: 2 },
        { text: "I use budgeting apps or spreadsheets", points: 3 },
        { text: "I have a detailed budget I review weekly", points: 4 }
      ]
    },
    {
      id: 4,
      question: "What's your current debt situation?",
      options: [
        { text: "High debt across multiple cards/loans", points: 0 },
        { text: "Some credit card debt", points: 1 },
        { text: "Only mortgage/student loans", points: 2 },
        { text: "Minimal debt, paying off quickly", points: 3 },
        { text: "Debt-free except mortgage", points: 4 }
      ]
    },
    {
      id: 5,
      question: "How much are you contributing to retirement?",
      options: [
        { text: "Nothing yet", points: 0 },
        { text: "Less than 5%", points: 1 },
        { text: "5-10%", points: 2 },
        { text: "10-15%", points: 3 },
        { text: "15% or more", points: 4 }
      ]
    },
    {
      id: 6,
      question: "How comfortable are you with investing?",
      options: [
        { text: "I avoid it completely", points: 0 },
        { text: "I'm interested but don't know where to start", points: 1 },
        { text: "I have some investments but not confident", points: 2 },
        { text: "I invest regularly with basic knowledge", points: 3 },
        { text: "I'm confident in my investment strategy", points: 4 }
      ]
    },
    {
      id: 7,
      question: "How often do you review your financial goals?",
      options: [
        { text: "I don't have written financial goals", points: 0 },
        { text: "I think about them occasionally", points: 1 },
        { text: "Once a year", points: 2 },
        { text: "Quarterly", points: 3 },
        { text: "Monthly or more often", points: 4 }
      ]
    },
    {
      id: 8,
      question: "What's your credit score range?",
      options: [
        { text: "I don't know my credit score", points: 0 },
        { text: "Below 600", points: 1 },
        { text: "600-699", points: 2 },
        { text: "700-799", points: 3 },
        { text: "800 or above", points: 4 }
      ]
    },
    {
      id: 9,
      question: "How do you handle unexpected expenses?",
      options: [
        { text: "Put them on credit cards", points: 0 },
        { text: "Borrow from family/friends", points: 1 },
        { text: "Use my checking account", points: 2 },
        { text: "Use my emergency fund", points: 3 },
        { text: "I budget for unexpected expenses", points: 4 }
      ]
    },
    {
      id: 10,
      question: "What's your main financial priority right now?",
      options: [
        { text: "Just trying to make ends meet", points: 0 },
        { text: "Paying off debt", points: 1 },
        { text: "Building an emergency fund", points: 2 },
        { text: "Saving for retirement", points: 3 },
        { text: "Growing wealth and investments", points: 4 }
      ]
    }
  ];

  const getResults = (totalScore: number) => {
    if (totalScore <= 10) {
      return {
        level: "Financial Starter",
        color: "red",
        icon: AlertCircle,
        description: "You're just beginning your financial journey, and that's perfectly okay! Everyone starts somewhere.",
        recommendations: [
          "Start with a simple budget using our free budget planner",
          "Focus on building a $1,000 emergency fund",
          "Learn the basics through our beginner blog posts",
          "Consider our Basic plan for foundational knowledge"
        ],
        nextSteps: "Begin with our free Financial Health Assessment and basic budgeting tools."
      };
    } else if (totalScore <= 20) {
      return {
        level: "Budget Builder",
        color: "yellow",
        icon: TrendingUp,
        description: "You have some financial basics down but there's room for improvement and growth.",
        recommendations: [
          "Strengthen your emergency fund to 3-6 months of expenses",
          "Increase your savings rate gradually",
          "Use our debt payoff calculator to create a repayment plan",
          "Start learning about basic investing concepts"
        ],
        nextSteps: "Our Pro plan would give you the tools to accelerate your financial progress."
      };
    } else if (totalScore <= 30) {
      return {
        level: "Money Manager",
        color: "blue",
        icon: CheckCircle,
        description: "You're doing well with your finances! You have solid fundamentals and good habits.",
        recommendations: [
          "Optimize your investment strategy for better returns",
          "Consider tax-advantaged retirement accounts",
          "Explore advanced budgeting techniques",
          "Set specific long-term financial goals"
        ],
        nextSteps: "The Elite plan can help you fine-tune your strategy and maximize your wealth building."
      };
    } else {
      return {
        level: "Wealth Builder",
        color: "green",
        icon: CheckCircle,
        description: "Excellent work! You have strong financial habits and are well on your way to financial freedom.",
        recommendations: [
          "Focus on advanced investment strategies",
          "Consider tax optimization techniques",
          "Explore estate planning options",
          "Share your knowledge with our community"
        ],
        nextSteps: "Our Elite plan offers advanced tools and personalized guidance for wealth optimization."
      };
    }
  };

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const results = getResults(totalScore);
  const IconComponent = results.icon;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="overflow-hidden">
          <CardHeader className={`text-center bg-${results.color}-50 border-b border-${results.color}-200`}>
            <div className="flex justify-center mb-4">
              <div className={`bg-${results.color}-500 p-4 rounded-full`}>
                <IconComponent className="text-white" size={32} />
              </div>
            </div>
            <h2 className={`text-3xl font-bold text-${results.color}-800 mb-2`}>
              You're a {results.level}!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {results.description}
            </p>
            <div className="mt-4">
              <span className={`text-4xl font-bold text-${results.color}-600`}>
                {totalScore}/40
              </span>
              <span className="text-gray-500 ml-2">Financial Health Score</span>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Recommended Actions
                </h3>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-navy-50 border border-navy-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Your Next Steps
                </h3>
                <p className="text-gray-700 mb-6">
                  {results.nextSteps}
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                    Start 7-Day Free Trial
                  </Button>
                  <Button variant="outline" className="w-full" onClick={resetQuiz}>
                    Retake Quiz
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-navy-900">
              Financial Health Quiz
            </h2>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-navy-900 mb-6">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start p-4 h-auto hover:bg-navy-50 hover:border-navy-300"
                  onClick={() => handleAnswer(option.points)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>Progress: {Math.round(progress)}%</span>
            <span>Estimated completion: 2 minutes</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialQuiz;
