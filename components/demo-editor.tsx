"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, MessageSquare } from "lucide-react";

export function DemoEditor() {
  const [text, setText] = useState(
    "Vannakam! Eppadi irukkurringa? Ungal ilakkanathil ungalukku udhavi seiya naangal inge irukkirom."
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setShowSuggestions(false);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowSuggestions(true);
    }, 1500);
  };

  const suggestions = [
    {
      type: "grammar",
      original: "Their is a mistake",
      suggestion: "There is a mistake",
      explanation: "Use 'there' instead of 'their' for indicating a place or existence."
    },
    {
      type: "grammar",
      original: "in this sentense",
      suggestion: "in this sentence",
      explanation: "The correct spelling is 'sentence'."
    },
    {
      type: "clarity",
      original: "The meeting will be held on tomorrow",
      suggestion: "The meeting will be held tomorrow",
      explanation: "Remove the preposition 'on' before 'tomorrow'."
    },
    {
      type: "grammar",
      original: "We should of discussed",
      suggestion: "We should have discussed",
      explanation: "Use 'have' instead of 'of' after 'should'."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            See How It Works
          </h2>
          <p className={`text-lg text-gray-600 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Try our writing assistant with this interactive demo.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg">Write or paste text</h3>
                <Button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-primary hover:bg-primary/90 text-black"
                >
                  {isAnalyzing ? "Analyzing..." : "Check Writing"}
                </Button>
              </div>
              
              <textarea
                value={text}
                onChange={handleTextChange}
                className="w-full h-64 p-4 border rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Type or paste your text here..."
              />
              
              {showSuggestions && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Suggestions:</h4>
                  <div className="space-y-3">
                    {suggestions.map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                        {item.type === "grammar" ? (
                          <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        ) : (
                          <MessageSquare className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-sm">
                            <span className="line-through text-gray-500">{item.original}</span>
                            {" → "}
                            <span className="text-primary font-medium">{item.suggestion}</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{item.explanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="md:col-span-2 bg-gray-50 p-6 border-l">
              <Tabs defaultValue="score">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="score">Score</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
                
                <TabsContent value="score" className="space-y-4">
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/20 mb-4">
                      <span className="text-3xl font-bold text-primary">72</span>
                    </div>
                    <h4 className="font-semibold">Your Writing Score</h4>
                    <p className="text-sm text-gray-500">Good, but could be improved</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Grammar</span>
                        <span className="font-medium">3 issues</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-red-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Clarity</span>
                        <span className="font-medium">1 issue</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-500 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Engagement</span>
                        <span className="font-medium">Good</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="insights" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Sentence Length</h4>
                        <p className="text-sm text-gray-600">Good variety of sentence lengths.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Word Choice</h4>
                        <p className="text-sm text-gray-600">Consider using more precise words.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Readability</h4>
                        <p className="text-sm text-gray-600">Your text is easy to read.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Grammar</h4>
                        <p className="text-sm text-gray-600">Several grammar issues detected.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}