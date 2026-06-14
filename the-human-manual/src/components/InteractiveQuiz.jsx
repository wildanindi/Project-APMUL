import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      question: 'Berapa waktu paruh kafein dalam tubuh orang dewasa sehat?',
      options: ['1-2 jam', '3-5 jam', '8-10 jam', '12-14 jam'],
      correctAnswer: 1,
      explanation: 'Waktu paruh kafein adalah 3-5 jam, artinya setengah dari kafein yang dikonsumsi akan dieliminasi dalam waktu tersebut.'
    },
    {
      question: 'Gen apa yang mengatur metabolisme kafein di hati?',
      options: ['CYP2D6', 'CYP1A2', 'CYP3A4', 'CYP2C19'],
      correctAnswer: 1,
      explanation: 'Gen CYP1A2 mengkode enzim yang bertanggung jawab metabolisme ~95% kafein dalam tubuh.'
    },
    {
      question: 'Batas aman konsumsi kafein per hari untuk orang dewasa adalah?',
      options: ['200 mg', '300 mg', '400 mg', '500 mg'],
      correctAnswer: 2,
      explanation: 'FDA dan EFSA merekomendasikan batas maksimal 400mg kafein per hari untuk orang dewasa sehat (sekitar 4 cangkir kopi).'
    },
    {
      question: 'Reseptor otak mana yang diblokir oleh kafein?',
      options: ['Reseptor dopamin', 'Reseptor adenosin', 'Reseptor serotonin', 'Reseptor GABA'],
      correctAnswer: 1,
      explanation: 'Kafein memblokir reseptor adenosin A1 dan A2A, mencegah molekul adenosin (pembawa sinyal kantuk) berikatan dengan reseptornya.'
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan kafein untuk mencapai konsentrasi puncak dalam darah?',
      options: ['5-10 menit', '15-30 menit', '30-60 menit', '90-120 menit'],
      correctAnswer: 2,
      explanation: 'Kafein mencapai konsentrasi puncak dalam darah sekitar 30-60 menit setelah konsumsi, saat efeknya paling kuat dirasakan.'
    },
    {
      question: 'Apa yang terjadi saat konsumsi kafein kronis?',
      options: [
        'Produksi adenosin berkurang',
        'Reseptor adenosin bertambah (toleransi)',
        'Kafein tidak diserap lagi',
        'Efek kafein menjadi permanen'
      ],
      correctAnswer: 1,
      explanation: 'Konsumsi kafein kronis menyebabkan upregulasi (peningkatan jumlah) reseptor adenosin sebagai mekanisme kompensasi, mengakibatkan toleransi.'
    },
    {
      question: 'Batas aman kafein untuk ibu hamil adalah?',
      options: ['100 mg/hari', '200 mg/hari', '300 mg/hari', '400 mg/hari'],
      correctAnswer: 1,
      explanation: 'ACOG (American College of Obstetricians and Gynecologists) merekomendasikan ibu hamil membatasi konsumsi kafein hingga maksimal 200mg per hari.'
    },
    {
      question: 'Manakah yang BUKAN efek kafein?',
      options: [
        'Meningkatkan kewaspadaan',
        'Meningkatkan detak jantung',
        'Menurunkan tekanan darah',
        'Meningkatkan produksi urin'
      ],
      correctAnswer: 2,
      explanation: 'Kafein justru meningkatkan (bukan menurunkan) tekanan darah, terutama pada orang yang tidak terbiasa mengonsumsi kafein.'
    },
  ];

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const newUserAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newUserAnswers);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { message: 'Sempurna! Anda ahli kafein! 🏆', color: 'text-green-600' };
    if (percentage >= 75) return { message: 'Hebat! Pengetahuan Anda sangat baik! 🌟', color: 'text-blue-600' };
    if (percentage >= 50) return { message: 'Bagus! Terus belajar! 📚', color: 'text-amber-600' };
    return { message: 'Coba lagi! Baca materi dengan lebih teliti! 💪', color: 'text-orange-600' };
  };

  return (
    <section className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <Brain className="w-10 h-10 sm:w-16 sm:h-16 text-purple-600 mx-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Uji Pengetahuan Anda
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Quiz interaktif untuk menguji pemahaman Anda tentang kafein
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Progress */}
              <div className="bg-purple-600 p-4 sm:p-6 text-white">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold">
                    Pertanyaan {currentQuestion + 1} dari {questions.length}
                  </span>
                  <span className="text-xs sm:text-sm">
                    Skor: {score}/{currentQuestion + (showResult ? 1 : 0)}
                  </span>
                </div>
                <div className="w-full h-2 bg-purple-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    className="h-full bg-white rounded-full"
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="p-4 sm:p-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === questions[currentQuestion].correctAnswer;
                    const isSelected = selectedAnswer === index;

                    let buttonClass = 'w-full text-left p-3 sm:p-5 rounded-xl border-2 transition-all font-medium text-sm sm:text-base ';

                    if (!showResult) {
                      buttonClass += 'border-gray-200 hover:border-purple-400 hover:bg-purple-50';
                    } else {
                      if (isCorrect) {
                        buttonClass += 'border-green-500 bg-green-50';
                      } else if (isSelected && !isCorrect) {
                        buttonClass += 'border-red-500 bg-red-50';
                      } else {
                        buttonClass += 'border-gray-200 opacity-50';
                      }
                    }

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        whileHover={{ scale: showResult ? 1 : 1.02 }}
                        whileTap={{ scale: showResult ? 1 : 0.98 }}
                        className={buttonClass}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showResult && isCorrect && (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <XCircle className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6"
                    >
                      <div className={`p-6 rounded-xl ${
                        selectedAnswer === questions[currentQuestion].correctAnswer
                          ? 'bg-green-50 border-2 border-green-500'
                          : 'bg-blue-50 border-2 border-blue-500'
                      }`}>
                        <h4 className="font-semibold mb-2 text-gray-900">
                          {selectedAnswer === questions[currentQuestion].correctAnswer
                            ? '✅ Jawaban Benar!'
                            : '💡 Penjelasan:'}
                        </h4>
                        <p className="text-gray-700">
                          {questions[currentQuestion].explanation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next Button */}
                {showResult && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={nextQuestion}
                    className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                  >
                    {currentQuestion < questions.length - 1 ? 'Pertanyaan Berikutnya →' : 'Lihat Hasil 🏆'}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-12 text-center"
            >
              <div className="mb-8">
                <Trophy className="w-24 h-24 text-amber-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Quiz Selesai!</h3>
                {(() => {
                  const { message, color } = getScoreMessage();
                  return <p className={`text-xl font-semibold ${color}`}>{message}</p>;
                })()}
              </div>

              <div className="bg-linear-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
                <div className="text-6xl font-bold text-purple-600 mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-gray-600 text-lg">
                  Skor Anda: {Math.round((score / questions.length) * 100)}%
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={restartQuiz}
                  className="flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  Coba Lagi
                </button>
              </div>

              {/* Review */}
              <div className="mt-8 text-left">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Ringkasan Jawaban</h4>
                <div className="space-y-2">
                  {questions.map((q, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border-2 ${
                        userAnswers[idx] === q.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {userAnswers[idx] === q.correctAnswer ? (
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">
                            Soal {idx + 1}: {q.question}
                          </p>
                          {userAnswers[idx] !== q.correctAnswer && (
                            <p className="text-xs text-gray-600 mt-1">
                              Jawaban benar: {q.options[q.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
